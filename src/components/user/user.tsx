import { TableUSer } from "./table-user";
import { NavLink } from "react-router-dom";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import {  searchUsers } from "../../features/userSlice";
import { redStyle, grayStyle } from "./variablesUser";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IUser } from "../../types";
import { StatusUser } from "../../enum";
import { ButtonOrder } from "../booking/variablesBooking";


export const User: FC = (): JSX.Element => {


  const dispatch = useAppDispatch();
  const template: IUser[] = useAppSelector<IUser[]>((store) => store.user);
  const [users, setUsers] = useState<IUser[]>(template);

  
  useEffect(() => {
    dispatch(searchUsers());
  }, []);
  
  useEffect(() => {
    setUsers(template);
  }, [template]);

  const handleSearch = (e: string): void => {
    if (e !== "") {
      
      setUsers(template.filter((template) => template.name.toLowerCase().includes(e.toLowerCase())));
    } else {
      setUsers(template);
    }
  };

  const [active, setActive] = useState<CSSProperties>(grayStyle);
  const [inactive, setInactive] = useState<CSSProperties>(grayStyle);
  const [all, setAll] = useState<CSSProperties>(redStyle);

  const colorCase = (n: number): void => {
    n === 0 ? setAll(redStyle) : setAll(grayStyle);
    n === 1 ? setActive(redStyle) : setActive(grayStyle);
    n === 2 ? setInactive(redStyle) : setInactive(grayStyle);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "20px ",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <p
            style={all}
            onClick={() => {
              setUsers(template);
              colorCase(0);
            }}
          >
            All Employed{" "}
          </p>
          <p
            style={active}
            onClick={() => {
              setUsers(template.filter((template) => template.status === StatusUser.Active));
              colorCase(1);
            }}
          >
            Active Employee
          </p>
          <p
            style={inactive}
            onClick={() => {
              setUsers(template.filter((template) => template.status === StatusUser.Inactive));
              colorCase(2);
            }}
          >
            Inactive Employee
          </p>
        </div>
        <div>
          <span>Search: </span>
          <input
            type="text"
            onChange={(e) => {
              handleSearch(e.target.value);
              colorCase(0);
            }}
          />
        </div>
        <ButtonOrder >
          <NavLink
            to={"/dashboard-hotel-miranda/new-user"}
            style={{ color: "white", textDecoration: "none" }}
          >
            +New User
          </NavLink>
        </ButtonOrder>
      </div>
      <TableUSer template={users} />
    </>
  );
};

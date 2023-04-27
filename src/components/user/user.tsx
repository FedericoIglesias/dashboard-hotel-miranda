import { TableUSer } from "./table-user";
import { Link, NavLink } from "react-router-dom";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../features/userSlice";
import { redStyle, grayStyle, btnStyle, IUser } from "./variablesUser";


export const User: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const template: any = useSelector<any>((store) => store.user);
  const [users, setUsers] = useState<IUser[]>(template);

  useEffect(() => {
    dispatch(searchUser());
  }, []);

  useEffect(() => {
    setUsers(template);
  }, [template]);

  const handleSearch = (e: string): void => {
    if (e !== "") {
      
      setUsers(template.filter((template) => template.name.includes(e)));
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
              setUsers(template.filter((template) => template.status === true));
              colorCase(1);
            }}
          >
            Active Employee
          </p>
          <p
            style={inactive}
            onClick={() => {
              setUsers(template.filter((template) => template.status === false));
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
        <button style={btnStyle}>
          <NavLink
            to={"/dashboard-hotel-miranda/new-user"}
            style={{ color: "white", textDecoration: "none" }}
          >
            +New User
          </NavLink>
        </button>
      </div>
      <TableUSer template={users} />
    </>
  );
};

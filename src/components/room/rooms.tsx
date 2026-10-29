import { TableRoom } from "./table-room";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import { ButtonOrder } from "../booking/variablesBooking";


export const Room: FC = (): JSX.Element => {
  return (
    <>
      <div style={{marginBottom: '10px'}}>
        <ButtonOrder >
          <NavLink
            to={"/dashboard-hotel-miranda/new-room"}
            style={{ color: "white", textDecoration: "none" }}
          >
            +New Room
          </NavLink>
        </ButtonOrder>
      </div>
      <TableRoom />
    </>
  );
};

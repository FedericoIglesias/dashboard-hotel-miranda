import { TableRoom } from "./table-room";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import { btnStyle } from "./variablesRoom";


export const Room: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <button style={btnStyle}>
          <NavLink
            to={"/dashboard-hotel-miranda/new-room"}
            style={{ color: "white", textDecoration: "none" }}
          >
            +New Room
          </NavLink>
        </button>
      </div>
      <TableRoom />
    </>
  );
};

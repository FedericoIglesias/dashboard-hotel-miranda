import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import room from "../../json/room.json";
import check from "../../json/check.json";
import { styleIcon, Category, Number, Card } from "./variablesDashboard";
import React, { FC } from "react";



export const Stats: FC = (): JSX.Element => {

  const reservation: object[] = room.filter((room) => room.booking);
  const checkIn: object[] = check.filter((check) => check.checkIn);
  const checkOut: object[] = check.filter((check) => check.checkOut);

  return (
    <section
      style={{
        display: "flex",
        marginTop: "30px",
        justifyContent: "space-around",
      }}
    >
      <Card>
        <CalendarMonthIcon style={styleIcon} />
        <div>
          <Number>{reservation.length}</Number>
          <Category>Reservation</Category>
        </div>
      </Card>

      <Card>
        <BedIcon style={styleIcon} />
        <div>
          <Number>{(reservation.length / 1000) * 100}%</Number>
          <Category>Busy</Category>
        </div>
      </Card>
      <Card>
        <LoginIcon style={styleIcon} />
        <div>
          <Number>{checkIn.length}</Number>
          <Category>Check In</Category>
        </div>
      </Card>
      <Card>
        <LogoutIcon style={styleIcon} />
        <div>
          <Number>{checkOut.length}</Number>
          <Category>Check Out</Category>
        </div>
      </Card>
    </section>
  );
};

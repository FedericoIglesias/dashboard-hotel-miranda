import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { styleIcon, Category, Number, Card } from "./variablesDashboard";
import React, { FC, useEffect } from "react";
import { IBooking, IRoom } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getRooms } from "../../features/roomSlice";
import { StatusBook, StatusRoom } from "../../enum";
import { searchBooking } from "../../features/bookingSlice";



export const Stats: FC = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const listRooms: IRoom[] = useAppSelector<IRoom[]>((store) => store.room.rooms);
  const bookigns: IBooking[]= useAppSelector<IBooking[]>((store) => store.booking);


  useEffect(() => {
    dispatch(getRooms());
    dispatch(searchBooking());
  }, []);

  const reservation: object[] = listRooms.filter((room) => room.status === StatusRoom.Booked);
  const checkIn: object[] = bookigns.filter((book) => book.status === StatusBook.CheckIn);
  const checkOut: object[] = bookigns.filter((book) => book.status === StatusBook.CheckOut);

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
          <Number>{(reservation.length / listRooms.length) * 100}%</Number>
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

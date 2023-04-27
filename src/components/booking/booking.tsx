import { useDispatch } from "react-redux";
import { Table } from "./table-booking";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchBooking } from "../../features/bookingSlice";
// import booking from "../../json/booking.json";

export const Booking: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const booking: any = useSelector<any>((store) => store.booking);
  const [book, setBook] = useState<[]>(booking);
  console.log(booking);
  
  useEffect(() => {
    dispatch(searchBooking());
  }, []);

  useEffect(() => {
    setBook(booking);
  }, [booking]);

  const handleOrder = (state:string) => {
    switch (state) {
      case "book":
        booking.sort((a, b) => {
          return (
            new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
          );
        });
        break;
      case "in":
        booking.sort((a, b) => {
          return new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime();
        });
        break;
      case "out":
        booking.sort((a, b) => {
          return (
            new Date(a.checkOut).getTime() - new Date(b.checkOut).getTime()
          );
        });
        break;
      case "progres":
        booking.sort((a, b) => {
          return a.status - b.status;
        });
        break;
      default:
    }
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          backgroundColor: "white",
          margin: "20px 10px",
          width: "50%",
          justifyContent: "space-around",
        }}
      >
        <p onClick={() => handleOrder("book")}>All Booking</p>
        <p onClick={() => handleOrder("in")}>Checking In</p>
        <p onClick={() => handleOrder("out")}>Checking Out</p>
        <p onClick={() => handleOrder("progres")}>In Progress</p>
      </section>
      <Table book={book} />
    </>
  );
};

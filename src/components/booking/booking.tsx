import { Table } from "./table-booking";
import React, { FC } from "react";
import booking from "../../json/booking.json";

export const Booking: FC = (): JSX.Element => {
    
  const handleOrder = (state) => {
    switch (state) {
      case "book":
        booking.sort(
          (a, b) =>
            new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
        );
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
        // booking.sort((a, b) => { return a.status - b.status })
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
      <Table />
    </>
  );
};

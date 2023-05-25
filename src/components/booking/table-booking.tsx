import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  styleColumn,
  styleIn,
  styleOut,
  Row,
  styleProgress,
} from "./variablesBooking";
import { SelectPage } from "../select-page";
import { IBooking } from "../../types";
import { StatusBook } from "../../enum";
import { OptionBooking } from "./optionBooking";

export const Table: FC<any> = ({ book }): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const booking: IBooking[] = book.slice(10 * page - 10, 10 * page);

  const handleStatusColor = (status: StatusBook) => {
    if (status === StatusBook.CheckIn) {
      return styleIn;
    } else if (status === StatusBook.CheckOut) {
      return styleOut;
    } else {
      return styleProgress;
    }
  };

  return (
    <>
      <section style={{ width: "90%", margin: "auto" }}>
        <Row>
          <p style={{ width: "16%" }}>Guest</p>
          <p style={styleColumn}>Order Date</p>
          <p style={styleColumn}>Check In</p>
          <p style={styleColumn}>Check Out</p>
          <p style={styleColumn}>Special Request</p>
          <p style={styleColumn}>Room Type</p>
          <p style={styleColumn}>Status</p>
        </Row>
        {booking.map((item: IBooking) => {
          return (
            <Row key={item._id}>
              <NavLink
                to={`/dashboard-hotel-miranda/booking/${item._id}`}
                style={{ width: "16%", color: "black", textDecoration: "none" }}
              >
                <p>{item.name}</p>
              </NavLink>
              <p style={styleColumn}>
                {new Date(item.orderDate).toLocaleDateString("es-ES")}
              </p>
              <p style={styleColumn}>
                {new Date(item.checkIn).toLocaleDateString("es-ES")}
              </p>
              <p style={styleColumn}>
                {new Date(item.checkOut).toLocaleDateString("es-ES")}
              </p>
              <p style={styleColumn}>lorem</p>
              <p style={styleColumn}>{item.idRoom}</p>
              <p style={handleStatusColor(item.status)}>{item.status}</p>
              <OptionBooking id={item._id}/>
            </Row>
          );
        })}
        <SelectPage array={book} setNp={setPage} show={booking} />
      </section>
    </>
  );
};

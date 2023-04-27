import React, { FC, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import { styleColumn, styleIn, styleOut, Row, TypeItem } from "./variablesBooking";
import { SelectPage } from "../select-page";

export const Table: FC<any> = ({ book }): JSX.Element => {
  const [page, setPage] = useState<number>(1);

  const booking: any = book.slice(10 * page - 10, 10 * page);

  const handleDelete = () => {};

  const handleStatusColor = (status: boolean) => {
    if (status === true) {
      return styleIn;
    } else {
      return styleOut;
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
        {booking.map((item: TypeItem) => {
          return (
            <Row key={item.id}>
              <NavLink
                to={`/dashboard-hotel-miranda/booking/${item.id}`}
                style={{ width: "16%", color: "black", textDecoration: "none" }}
              >
                <p>{item.name}</p>
              </NavLink>
              <p style={styleColumn}>{item.orderDate}</p>
              <p style={styleColumn}>{item.checkIn}</p>
              <p style={styleColumn}>{item.checkOut}</p>
              <p style={styleColumn}>lorem</p>
              <p style={styleColumn}>{item.tipoHabitacion}Deluxe</p>
              <p style={handleStatusColor(item.status)}>
                {item.status === true ? "Check In" : "Check Out"}
              </p>
              <div onClick={() => handleDelete()}>
                <MoreVertIcon />
              </div>
            </Row>
          );
        })}
        <SelectPage array={book} setNp={setPage} show={booking} />
      </section>
    </>
  );
};

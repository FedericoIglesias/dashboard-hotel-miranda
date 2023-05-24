import { Table } from "./table-booking";
import React, { FC, useEffect, useState } from "react";
import { searchBooking } from "../../features/bookingSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IBooking } from "../../types";
import { StatusBook } from "../../enum";
import { ButtonOrder} from "./variablesBooking";

export const Booking: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const booking: IBooking[] = useAppSelector((state) => state.booking);
  const [book, setBook] = useState<IBooking[]>(booking);

  useEffect(() => {
    dispatch(searchBooking());
  }, []);

  useEffect(() => {
    setBook(booking);
  }, [booking]);

  const handleOrder = (state: string) => {
    let newOrder;
    switch (state) {
      case "book":
        return setBook(booking);
      case StatusBook.CheckIn:
        newOrder = booking.filter((item) => item.status === StatusBook.CheckIn);
        return setBook(newOrder);
      case StatusBook.CheckOut:
        newOrder = booking.filter((item) => item.status === StatusBook.CheckOut);
        return setBook(newOrder);
      case StatusBook.InProgress:
        newOrder = booking.filter((item) => item.status === StatusBook.InProgress);
        return setBook(newOrder)
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
        <ButtonOrder  onClick={() => handleOrder("book")}>All Booking</ButtonOrder>
        <ButtonOrder  onClick={() => handleOrder(StatusBook.CheckIn)}>Checking In</ButtonOrder>
        <ButtonOrder  onClick={() => handleOrder(StatusBook.CheckOut)}>Checking Out</ButtonOrder>
        <ButtonOrder  onClick={() => handleOrder(StatusBook.InProgress)}>In Progress</ButtonOrder>
      </section>
      <Table book={book} />
    </>
  );
};

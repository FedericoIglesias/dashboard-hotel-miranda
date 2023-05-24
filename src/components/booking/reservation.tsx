import { useParams } from "react-router";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import React, { useEffect, FC } from "react";
import { searchBooking } from "../../features/bookingSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IBooking } from "../../types";

export const Reservation: FC = ():JSX.Element => {

  const dispatch = useAppDispatch();
  const booking: IBooking[] = useAppSelector((state) => state.booking);

  useEffect(() => {
    dispatch(searchBooking());
  }, []);

  useEffect(() => {}, [booking]);

  const params = useParams();
  const id: string | undefined = params.id;

  let book: IBooking[] = booking.filter(
    (booking) => booking._id.toString() === id
  );

  const imgRoom = require("../../assets/room3.jpg");
  const imgCustomer = require("../../assets/customer.webp");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <article
        style={{
          backgroundColor: "white",
          padding: "20px 100px 10px 10px",
          height: "400px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={imgCustomer}
            alt="profile"
            style={{
              width: "100px",
              height: "110px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          <div style={{ padding: "10px 0" }}>
            <p style={{ fontWeight: "700", marginBottom: "5px" }}>
              {book[0].name}
            </p>
            <p
              style={{
                fontWeight: "700",
                marginBottom: "5px",
                fontSize: "10px",
                color: "gray",
              }}
            >
              ID {book[0]._id}
            </p>
            <span style={{ color: "#135846", marginRight: "10px" }}>
              <LocalPhoneIcon />
            </span>
            <button
              style={{
                backgroundColor: "#135846",
                border: "none",
                padding: "10px 10px 5px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <MessageIcon />{" "}
              <span style={{ position: "relative", top: "-8px" }}>
                Send Message
              </span>
            </button>
          </div>
        </div>
        <div
          style={{ display: "flex", paddingLeft: "15px", marginBottom: "10px" }}
        >
          <div style={{ marginRight: "84px" }}>
            <p style={{ fontSize: "10px", color: "gray", fontWeight: "700" }}>
              Check In
            </p>
            <p style={{ fontSize: "12px", fontWeight: "700" }}>
              {book[0].checkIn}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "10px", color: "gray", fontWeight: "700" }}>
              Check Out
            </p>
            <p style={{ fontSize: "12px", fontWeight: "700" }}>
              {book[0].checkOut}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "130%",
            height: "1px",
            backgroundColor: "gray",
            marginBottom: "10px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "15px", marginBottom: "10px" }}
        >
          <div style={{ marginRight: "100px" }}>
            <p style={{ fontSize: "10px", color: "gray", fontWeight: "700" }}>
              Room Info
            </p>
            
            <p style={{ fontSize: "15px", fontWeight: "700" }}>
              {book[0].idRoom ? "" : ""}Deluxe {/*Repair in the future */}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "10px", color: "gray", fontWeight: "700" }}>
              price
            </p>
            <p style={{ fontSize: "15px", fontWeight: "700" }}>
              $145{" "}
              <span
                style={{ fontSize: "10px", fontWeight: "700", color: "gray" }}
              >
                /night
              </span>
            </p>
          </div>
        </div>
        <p>lorem </p>
        <div>
          <p>Facilities</p>
        </div>
      </article>
      <article style={{ width: "390px", position: "relative", top: "2px" }}>
        <img
          alt="room"
          src={imgRoom}
          style={{ width: "100%", height: "400px" }}
        />
        <div style={{ position: "absolute", bottom: "0px", padding: "15px" }}>
          <p style={{ color: "gray" }}>{book[0].idRoom}Deluxe</p>     {/* Repair in the future */}
          <p style={{ color: "gray", fontSize: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            voluptas minus incidunt voluptate eveniet perspiciatis natus
            reprehenderit necessitatibus? Tempora nostrum quae quos asperiores
            minima vitae voluptatibus rerum earum provident officia?
          </p>
        </div>
        <p
          style={{
            position: "absolute",
            top: "20px",
            right: "10px",
            backgroundColor: "green",
            color: "white",
            transform: "Rotate(40deg)",
            padding: "5px",
          }}
        >
          {book[0].status} Booked
        </p>
      </article>
    </section>
  );
}

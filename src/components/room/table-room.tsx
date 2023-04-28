import React, { useEffect, useState, FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IRoom, Row, styleAvai, styleBooked, styleColumn,styleImg } from "./variablesRoom";
import { SelectPage } from "../select-page";
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../../features/roomSlice";



export const TableRoom: FC = (): JSX.Element => {
  const [np, setNp] = useState<number>(1);
  const dispatch = useDispatch();
  const rooms: any = useSelector<any>((store) => store.room.rooms);
  const imgRoom = require('../../assets/room1.webp')

  let room: Array<IRoom> = rooms.slice(10 * np - 10, 10 * np);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const handleDelete = () => {
    console.log("i will delete you");
  };

  const status = (status:string) => status === "Available"? styleAvai : styleBooked;
  

  return (
    <>
      <section style={{ width: "90%", margin: "auto" }}>
        <Row>
          <p style={{ width: "26%" }}>Room Name</p>
          <p style={styleColumn}>Bed Type</p>
          <p style={styleColumn}>Room Floor</p>
          <p style={styleColumn}>Facilities</p>
          <p style={styleColumn}>Rate</p>
          <p style={styleColumn}>Status</p>
        </Row>

        {room.map((item) => {
          return (
            <Row key={item.idHabitacion}>
              <div
                style={{
                  width: "26%",
                  display: "flex",
                  alignItems: "center",
                  margin: "3px 0",
                }}
              >
                <img alt="" style={styleImg} src={imgRoom} />
                <p>{item.idHabitacion}</p>
              </div>
              <p style={styleColumn}>{item.roomType}</p>
              <p style={styleColumn}>Floor A1</p>
              <p style={{ width: "13%", fontSize: "10px" }}>{item.amenities}</p>
              <p style={styleColumn}>${item.price}</p>
              <p style={status(item.status)}>{item.status}</p>
              <div onClick={() => handleDelete()}>
                <MoreVertIcon />
              </div>
            </Row>
          );
        })}

        <SelectPage array={rooms} setNp={setNp} show={room} />
      </section>
    </>
  );
};

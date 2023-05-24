import React, { useEffect, useState, FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Row, styleAvai, styleBooked, styleColumn,styleImg } from "./variablesRoom";
import { SelectPage } from "../select-page";
import { getRooms } from "../../features/roomSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IRoom } from "../../types";



export const TableRoom: FC = (): JSX.Element => {
  const [np, setNp] = useState<number>(1);
  const dispatch = useAppDispatch();
  const listRooms: IRoom[] = useAppSelector<IRoom[]>((store) => store.room.rooms);


  let rooms: IRoom[] = listRooms.slice(10 * np - 10, 10 * np);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const handleDelete = () => {
    console.log("i will delete you");
  };

  const status = (status:string) => status === "Available"? styleAvai : styleBooked;
  

  return (
    <>
      <section style={{ width: "90%", margin: "auto" }}>
        <Row>
          <p style={{ width: "26%" }}>Number Room</p>
          <p style={styleColumn}>Bed Type</p>
          <p style={styleColumn}>Room Floor</p>
          <p style={styleColumn}>Facilities</p>
          <p style={styleColumn}>Rate</p>
          <p style={styleColumn}>Status</p>
        </Row>

        {rooms.map((item) => {
          return (
            <Row key={item._id}>
              <div
                style={{
                  width: "26%",
                  display: "flex",
                  alignItems: "center",
                  margin: "3px 0",
                }}
              >
                <img alt="" style={styleImg} src={item.photo[0]} />
                <p>{item.numberRoom}</p>
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

        <SelectPage array={listRooms} setNp={setNp} show={rooms} />
      </section>
    </>
  );
};

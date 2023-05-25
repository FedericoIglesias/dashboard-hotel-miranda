import React, { useState, FC, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { secStyle } from "./variablesRoom";
import { SelectionAmenitites } from "./selectAmenities";
import { IRoom } from "../../types";
import { StatusRoom, TypeRoom } from "../../enum";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { postRoom } from "../../features/roomSlice";

export const NewRoom: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

   let room: IRoom = useAppSelector<IRoom>((state) => state.room) 

  const [amenitie, setAmenities] = useState<string[]>([]);

  const [show, setShow] = useState<boolean>(false);

  const [newRoom, setNewRoom] = useState<Partial<IRoom>>({
    photo: ["asd"],
    numberRoom: 0,
    roomType: TypeRoom.Deluxe,
    amenities: [],
    price: 0,
    offerPercent: 0,
    status: StatusRoom.Available,
  });

  const handleCreate = () => {
    dispatch(postRoom(newRoom))
    setShow(!show);
    
  };

  useEffect(() => {
    setNewRoom({ ...newRoom, amenities: amenitie });
  }, [amenitie]);

  return (
    <>
      <section style={secStyle}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Room Type</p>
                <select
                  name={TypeRoom.Deluxe}
                  id=""
                  placeholder=""
                  onChange={(e) =>
                    setNewRoom({
                      ...newRoom,
                      roomType: e.target.value as TypeRoom,
                    })
                  }
                >
                  <option value={TypeRoom.Deluxe}>{TypeRoom.Deluxe}</option>
                  <option value={TypeRoom.DoubleBed}>
                    {TypeRoom.DoubleBed}
                  </option>
                  <option value={TypeRoom.SingleBed}>
                    {TypeRoom.SingleBed}
                  </option>
                </select>
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Room Number</p>
                <input
                  type="text"
                  onChange={(e) =>
                    setNewRoom({
                      ...newRoom,
                      numberRoom: Number(e.target.value),
                    })
                  }
                />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Offer</p>
                <input
                  type="checekd"
                  name=""
                  id=""
                  onChange={(e) =>
                    setNewRoom({
                      ...newRoom,
                      offerPercent: Number(e.target.value),
                    })
                  }
                />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Price</p>
                <input
                  type="text"
                  onChange={(e) =>
                    setNewRoom({ ...newRoom, price: Number(e.target.value) })
                  }
                />
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="">
                <p>Status</p>
                <select
                  name={StatusRoom.Available}
                  onChange={(e) =>
                    setNewRoom({
                      ...newRoom,
                      status: e.target.value as StatusRoom,
                    })
                  }
                >
                  <option value={StatusRoom.Available}>
                    {StatusRoom.Available}
                  </option>
                  <option value={StatusRoom.Booked}>{StatusRoom.Booked}</option>
                </select>
              </label>
            </Grid>
          </Grid>
        </Box>
        <SelectionAmenitites amenities={setAmenities} />
        <button onClick={() => handleCreate()}>Create</button>
      </section>
      <div>
        {show === true ? (
          <>
            <p>{room.amenities}</p>
            <p>{room.numberRoom}</p>
            <p>{room.offerPercent}</p>
            <p>{room.photo}</p>
            <p>{room.price}</p>
            <p>{room.roomType}</p>
            <p>{room.status}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

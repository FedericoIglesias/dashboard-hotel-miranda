import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IRoom } from "../types";
import { route } from "../dotenv";


interface ObjRoom {
  rooms: IRoom[];
  room: IRoom[];
}

const initialState: ObjRoom = { rooms: [], room: [] };

export const getRooms: any = createAsyncThunk(
  "fetch/fetchRoom",
  async (arg) => {
    try {
      const response = await fetch(route.room,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: '' // body data type must match "Content-Type" header
      });
      const data = response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

export const getRoom: any = createAsyncThunk("get/getRoom", async (id) => {
  try {
    const response = await fetch(`${route.room}/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    alert(error);
  }
});

export const deleteRoom: any = createAsyncThunk("delete/deleteRoom", async (id) => {
  try {
    const response = await fetch(route.room);
    return id;
  } catch (error) {
    alert(error);
  }
});

export const postRoom: any = createAsyncThunk(
  "post/postRoom",
  async (data) => {
    try {
      const response = await fetch(``);
      const data = response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const putRoom: any = createAsyncThunk(
  "put/putRoom",
  async (data) => {
    try {
      const response = await fetch(route.room);
      const data = response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: {
      [getRooms.pending]: (state) => {
        console.log("Loading");
      },
      [getRooms.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
        state.rooms = action.payload;
        return state;
      },
      [getRooms.reject]: (state) => {
        console.log("fail");
      },
      [getRoom.pending]: (state) => {
        console.log("Loading");
      },
      [getRoom.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
        state.rooms = action.payload;
        return state;
      },
      [getRoom.reject]: (state) => {
        console.log("fail");
      },
      [deleteRoom.pending]: (state) => {
        console.log("Loading");
      },
      [deleteRoom.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
        state.rooms = action.payload;
        return state;
      },
      [deleteRoom.reject]: (state) => {
        console.log("fail");
      },
      [postRoom.pending]: (state) => {
        console.log("Loading");
      },
      [postRoom.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
        state.rooms = action.payload;
        return state;
      },
      [postRoom.reject]: (state) => {
        console.log("fail");
      },
      [putRoom.pending]: (state) => {
        console.log("Loading");
      },
      [putRoom.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
        state.rooms = action.payload;
        return state;
      },
      [putRoom.reject]: (state) => {
        console.log("fail");
      },
},
});

export const selectRoom = (state: RootState) => state;

export default roomSlice.reducer;

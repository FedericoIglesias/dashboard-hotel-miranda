import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IRoom } from "../types";
import { route } from "../env-var";

interface ObjRoom {
  rooms: IRoom[];
  room: IRoom[];
}

const token = localStorage.getItem("token");

const initialState: ObjRoom = { rooms: [], room: [] };

export const getRooms: any = createAsyncThunk(
  "fetch/fetchRoom",
  async (arg) => {
    try {
      const response = await fetch(route.room, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token.replace('"', "").replace('"', "")}`,
        },
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

export const deleteRoom: any = createAsyncThunk(
  "delete/deleteRoom",
  async (_id: string) => {
    try {
      await fetch(`${route.room}/${_id}`,{
        method:'DELETE',
        headers:{
          authorization: `Bearer ${token.replace('"', "").replace('"', "")}`
        },
      });
      return `The room whit ${_id}, was delete`;
    } catch (error) {
      alert(error);
    }
  }
);

export const postRoom: any = createAsyncThunk("post/postRoom", async (data) => {
  try {
    const response = await fetch(`${route.room}`,{
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token.replace('"', "").replace('"', "")}`,
      },
      body: JSON.stringify(data),
    });
    const room = response.json();
    return room;
  } catch (error) {
    alert(error);
  }
});
export const putRoom: any = createAsyncThunk("put/putRoom", async (data) => {
  try {
    const response = await fetch(route.room);
    const data = response.json();
    return data;
  } catch (error) {
    alert(error);
  }
});

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
    [deleteRoom.fulfilled]: (state, action: PayloadAction<string>) => {
      
      return alert('The room was delte')
    },
    [deleteRoom.reject]: (state) => {
      console.log("fail");
    },
    [postRoom.pending]: (state) => {
      console.log("Loading");
    },
    [postRoom.fulfilled]: (state, action: PayloadAction<IRoom[]>) => {
      state.room = action.payload;
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

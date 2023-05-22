import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
require('dotenv').config()

export interface Ibooking {
  _id: number;
  name: string;
  orderDate: number;
  checkIn: number;
  checkOut: number;
  idRoom: number;
  status: boolean;
  specialRequest?: string;
}

const initialState: Ibooking[] = [];


export const searchBooking: any = createAsyncThunk(
  "search/searchBooking",
  async (arg) => {
    try {
      const response = await fetch(process.env.BOOKING_ROUTER);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

export const searchBook: any = createAsyncThunk(
  "search/searchBook",
  async (arg) => {
    try {
      const response = await fetch(`${process.env.BOOKING_ROUTER}/${arg}`);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const postBook: any = createAsyncThunk(
  "post/postBook",
  async (arg) => {
    try {
      const response = await fetch(process.env.BOOKING_ROUTER);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const putBook: any = createAsyncThunk(
  "put/putBook",
  async (arg) => {
    try {
      const response = await fetch(process.env.BOOKING_ROUTER);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const deleteBook: any = createAsyncThunk(
  "delete/deleteBook",
  async (arg) => {
    try {
      const response = await fetch(process.env.BOOKING_ROUTER);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);



const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: {
    [searchBooking.pending]: (state) => {
      console.log("Loading");
    },
    [searchBooking.fulfilled]: (state, action: PayloadAction<Ibooking[]>) => {
      state = action.payload;
      return state;
    },
    [searchBooking.reject]: (state) => {
      console.log("fail");
    },
    [searchBook.pending]: (state) => {
      console.log("Loading");
    },
    [searchBook.fulfilled]: (state, action: PayloadAction<Ibooking[]>) => {
      state = action.payload;
      return state;
    },
    [searchBook.reject]: (state) => {
      console.log("fail");
    },
    [postBook.pending]: (state) => {
      console.log("Loading");
    },
    [postBook.fulfilled]: (state, action: PayloadAction<Ibooking[]>) => {
      state = action.payload;
      return state;
    },
    [postBook.reject]: (state) => {
      console.log("fail");
    },
    [putBook.pending]: (state) => {
      console.log("Loading");
    },
    [putBook.fulfilled]: (state, action: PayloadAction<Ibooking[]>) => {
      state = action.payload;
      return state;
    },
    [putBook.reject]: (state) => {
      console.log("fail");
    },
    [deleteBook.pending]: (state) => {
      console.log("Loading");
    },
    [deleteBook.fulfilled]: (state, action: PayloadAction<Ibooking[]>) => {
      state = action.payload;
      return state;
    },
    [deleteBook.reject]: (state) => {
      console.log("fail");
    },
  },
});

export const selectBooking = (state: RootState) => state

export default bookingSlice.reducer;

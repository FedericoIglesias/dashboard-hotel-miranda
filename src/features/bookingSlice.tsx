import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


export interface Ibooking {
  id: number;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  status: boolean;
  tipoHabitacion?: string;
  specialRequest?: string;
}

const initialState: Ibooking[] = [];


export const searchBooking: any = createAsyncThunk(
  "serach/searchBooking",
  async (arg) => {
    try {
      const response = await fetch("json/booking.json");
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
  },
});

export const selectBooking = (state: RootState) => state

export default bookingSlice.reducer;

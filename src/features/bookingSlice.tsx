import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { route } from "../env-var";
import { IBooking } from "../types";

const initialState: IBooking[] = [];

const token = localStorage.getItem("token");

export const searchBooking: any = createAsyncThunk(
  "search/searchBooking",
  async (arg) => {
    try {
      const response = await fetch(route.booking, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token.replace('"', "").replace('"', "")}`,
        },
      });
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
      const response = await fetch(`${route.booking}/${arg}`);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const postBook: any = createAsyncThunk("post/postBook", async (arg) => {
  try {
    const response = await fetch(route.booking);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
});
export const putBook: any = createAsyncThunk("put/putBook", async (arg) => {
  try {
    const response = await fetch(route.booking);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
});
export const deleteBook: any = createAsyncThunk(
  "delete/deleteBook",
  async (_id) => {
    try {
      await fetch(`${route.booking}/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token.replace('"', "").replace('"', "")}`,
        },
      });
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
    [searchBooking.fulfilled]: (state, action: PayloadAction<IBooking[]>) => {
      state = action.payload;
      return state;
    },
    [searchBooking.reject]: (state) => {
      console.log("fail");
    },
    [searchBook.pending]: (state) => {
      console.log("Loading");
    },
    [searchBook.fulfilled]: (state, action: PayloadAction<IBooking[]>) => {
      state = action.payload;
      return state;
    },
    [searchBook.reject]: (state) => {
      console.log("fail");
    },
    [postBook.pending]: (state) => {
      console.log("Loading");
    },
    [postBook.fulfilled]: (state, action: PayloadAction<IBooking[]>) => {
      state = action.payload;
      return state;
    },
    [postBook.reject]: (state) => {
      console.log("fail");
    },
    [putBook.pending]: (state) => {
      console.log("Loading");
    },
    [putBook.fulfilled]: (state, action: PayloadAction<IBooking[]>) => {
      state = action.payload;
      return state;
    },
    [putBook.reject]: (state) => {
      console.log("fail");
    },
    [deleteBook.pending]: (state) => {
      console.log("Loading");
    },
    [deleteBook.fulfilled]: (state, action: PayloadAction<IBooking[]>) => {
      return alert("The book was delete");
    },
    [deleteBook.reject]: (state) => {
      console.log("fail");
    },
  },
});

export const selectBooking = (state: RootState) => state;

export default bookingSlice.reducer;

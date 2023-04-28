import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface IContact {
  id: number;
  name: string;
  email: string;
  contact: number;
  date: string;
  subject: string;
}

const initialState: IContact[] = [];

export const searchContact: any = createAsyncThunk(
  "search/searchContact",
  async (arg) => {
    try {
      const response = await fetch("json/mail.json");
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: {
    [searchContact.Pending]: (state) => {
      console.log("loading");
    },
    [searchContact.fulfilled]: (state, action: PayloadAction<IContact[]>) => {
      state = action.payload;
      return state;
    },
    [searchContact.reject]: (state) => {
      console.log("fail");
    },
  },
});

export const selectContact = (state: RootState) => state.counter.value;

export default contactSlice.reducer;

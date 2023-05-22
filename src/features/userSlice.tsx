import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IUser } from "./types";

const initialState: IUser[] = [];

export const searchUsers: any = createAsyncThunk(
  "search/searchUsers",
  async (arg) => {
    try {
      const response = await fetch(`${process.env.USER_ROUTE}/${arg}`);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const searchUser: any = createAsyncThunk(
  "search/searchUser",
  async (arg) => {
    try {
      const response = await fetch(process.env.USER_ROUTE);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const deleteUser: any = createAsyncThunk(
  "delete/deleteUser",
  async (arg) => {
    try {
      const response = await fetch(process.env.USER_ROUTE);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const postUser: any = createAsyncThunk(
  "post/postUser",
  async (arg) => {
    try {
      const response = await fetch(process.env.USER_ROUTE);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const putUser: any = createAsyncThunk(
  "put/putUser",
  async (arg) => {
    try {
      const response = await fetch(process.env.USER_ROUTE);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);



const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: {
    [searchUsers.Pending]: (state) => {
      console.log("loading");
    },
    [searchUsers.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload;
      return state;
    },
    [searchUsers.reject]: (state) => {
      console.log("fail");
    },
    [searchUser.Pending]: (state) => {
      console.log("loading");
    },
    [searchUser.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload;
      return state;
    },
    [searchUser.reject]: (state) => {
      console.log("fail");
    },
    [deleteUser.Pending]: (state) => {
      console.log("loading");
    },
    [deleteUser.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload;
      return state;
    },
    [deleteUser.reject]: (state) => {
      console.log("fail");
    },
    [postUser.Pending]: (state) => {
      console.log("loading");
    },
    [postUser.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload;
      return state;
    },
    [postUser.reject]: (state) => {
      console.log("fail");
    },
    [putUser.Pending]: (state) => {
      console.log("loading");
    },
    [putUser.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload;
      return state;
    },
    [putUser.reject]: (state) => {
      console.log("fail");
    },
  },
});



export const selectUser = (state: RootState) => state;
export default userSlice.reducer;
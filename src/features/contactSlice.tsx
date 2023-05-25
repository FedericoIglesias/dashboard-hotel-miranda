import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IContact } from "../types";
import { route } from "../env-var";

const initialState: IContact[] = [];

const token = localStorage.getItem("token");

export const searchContacts: any = createAsyncThunk(
  "search/searchContacts",
  async (arg) => {
    try {
      const response = await fetch(route.contact, {
        method: "GET",
        headers: {
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

export const searchContact: any = createAsyncThunk(
  "search/searchContact",
  async (arg) => {
    try {
      const response = await fetch(`${route.contact}/${arg}`);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const deleteContact: any = createAsyncThunk(
  "delete/deleteContact",
  async (id) => {
    try {
      console.log(id);
      
      await fetch(`${route.contact}/${id}`, {
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
export const postContact: any = createAsyncThunk(
  "post/postContact",
  async (arg) => {
    try {
      const response = await fetch(route.contact);
      const data = await response.json();
      return data;
    } catch (error) {
      alert(error);
    }
  }
);
export const putContact: any = createAsyncThunk(
  "put/putContact",
  async (arg) => {
    try {
      const response = await fetch(route.contact);
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
    [searchContacts.Pending]: (state) => {
      console.log("loading");
    },
    [searchContacts.fulfilled]: (state, action: PayloadAction<IContact[]>) => {
      state = action.payload;
      return state;
    },
    [searchContacts.reject]: (state) => {
      console.log("fail");
    },
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
    [deleteContact.Pending]: (state) => {
      console.log("loading");
    },
    [deleteContact.fulfilled]: (state, action: PayloadAction<IContact[]>) => {
      return alert("The comment was delete");
    },
    [deleteContact.reject]: (state) => {
      console.log("fail");
    },
    [postContact.Pending]: (state) => {
      console.log("loading");
    },
    [postContact.fulfilled]: (state, action: PayloadAction<IContact[]>) => {
      state = action.payload;
      return state;
    },
    [postContact.reject]: (state) => {
      console.log("fail");
    },
    [putContact.Pending]: (state) => {
      console.log("loading");
    },
    [putContact.fulfilled]: (state, action: PayloadAction<IContact[]>) => {
      state = action.payload;
      return state;
    },
    [putContact.reject]: (state) => {
      console.log("fail");
    },
  },
});

export const selectContact = (state: RootState) => state.counter.value;

export default contactSlice.reducer;

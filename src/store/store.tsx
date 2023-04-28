import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/roomSlice";
import bookingReducer, { Ibooking } from "../features/bookingSlice";
import userReducer from '../features/userSlice'
import contactReducer from '../features/contactSlice'
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { type } from "os";


export const store: ToolkitStore = configureStore({
        reducer:{
            booking: bookingReducer,
            room: roomReducer,
            user: userReducer,
            contact: contactReducer,
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
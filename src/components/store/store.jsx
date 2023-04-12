import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/roomSlice";
import bookingReducer from "../features/bookingSlice";
import userReducer from '../features/userSlice'
import contactReducer from '../features/contactSlice'


export const store = configureStore({
        reducer:{
            // booking: bookingReducer,
            room: roomReducer,
            user: userReducer,
            contact: contactReducer,
        }
    }
)

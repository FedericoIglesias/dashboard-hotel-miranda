import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/roomSlice";


export const store = configureStore({
        reducer:{
            rooms: roomReducer,
        }
    }
)

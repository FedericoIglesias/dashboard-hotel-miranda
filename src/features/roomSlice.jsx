import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {rooms: [], room: {}}



export const fetchRooms = createAsyncThunk('fetch/fetchRoom', async (arg) => {
    try {
        const response = await fetch(`json/rooms.json`);
        const data = response.json();
        return data;
    }
    catch (error) {
        alert(error)
    }
})

export const getRoom = createAsyncThunk('get/getRoom', async (id) => {
    try {
        const response = await fetch(`json/rooms.json`);
        const data = response.json();
        return data;
    }
    catch (error) {
        alert(error)
    }
})


export const deleteRoom = createAsyncThunk('delete/deleteRoom', async (id) => {
    try {
        const response = await fetch(`json/rooms.json`);
        return id;
    }
    catch (error) {
        alert(error)
    }
})
export const createRoom = createAsyncThunk('create/createRoom', async (data) => {
    try {
        const response = await fetch(``);
        const data = response.json();
        return data;
    }
    catch (error) {
        alert(error)
    }
})
export const upDateRoom = createAsyncThunk('upDate/upDateRoom', async (data) => {
    try {
        const response = await fetch(`json/rooms.json`);
        const data = response.json();
        return data;
    }
    catch (error) {
        alert(error)
    }
})




const roomSlice = createSlice({
    name: 'room',
    initialState,
    extraReducers: {
        [fetchRooms.pending]: (state) => {
            console.log('Loading')
        },
        [fetchRooms.fulfilled]: (state, action) => {
            state.rooms = action.payload
            return state
        },
        [fetchRooms.reject]: (state) => {
            console.log('fail')
        }
    }
})



export default roomSlice.reducer
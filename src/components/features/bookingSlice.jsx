import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = []




export const searchBooking = createAsyncThunk('serach/searchBooking', async (arg) => {

    try{
        const response = await fetch('json/booking.json')
        const data = await response.json()
        return data;
    }catch (error){alert(error)}

})



const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    extraReducers:{
        [searchBooking.pending]: (state) => {
            console.log('Loading')
        },
        [searchBooking.fulfilled]: (state, action) => {
            state = action.payload
            return state
        },
        [searchBooking.reject]: (state) => {
            console.log('fail')
        }
    }
})



export default bookingSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



let intialState = []




export const searchBooking = createAsyncThunk('serach/searchBooking', async (arg) => {

    try{
        const response = fetch('json/booking.json')
        const data = await response.json()
        return data;
    }catch (error){alert(error)}

})



const bookingSlice = createSlice({
    name: 'booking',
    intialState,
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
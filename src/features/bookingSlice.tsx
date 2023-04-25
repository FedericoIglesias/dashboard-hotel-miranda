import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


const initialState: object[] = []


export const searchBooking: any = createAsyncThunk('serach/searchBooking', async (arg) => {

    try{
        const response = await fetch('json/booking.json')
        const data = await response.json()
        return data;
    }catch (error){alert(error)}

})



const bookingSlice= createSlice({
    name: 'booking',
    initialState,
    reducers: {},
    extraReducers:{
        [searchBooking.pending ]: (state) => {
            console.log('Loading')
        },
        [searchBooking.fulfilled]: (state, action: PayloadAction<object[]> ) => {
            state = action.payload
            return state
        },
        [searchBooking.reject]: (state) => {
            console.log('fail')
        }
    }
})



export default bookingSlice.reducer
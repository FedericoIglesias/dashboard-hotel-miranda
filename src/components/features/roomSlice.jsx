import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const listRoom = {
    list:[]
}



const searchRoom = createAsyncThunk('search/searchRoom', async (arg)=>{
    try{
        const data = await fetch(`../../json/room.json`)
        return (data.json())
    }catch(error){
        alert (error)
    }
} )

const roomSlice = createSlice({
    name: 'room',
    initialState: listRoom,
    extraReducers:{
        [searchRoom.pending]: (state) => {
            console.log('Loading')
        },
        [searchRoom.fulfilled]: (state, action) => {
            return (state = action.payload)
        }
    }
})
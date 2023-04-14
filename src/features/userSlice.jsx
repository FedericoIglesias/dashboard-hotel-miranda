import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = []




export const searchUser = createAsyncThunk('search/searchUser', async (arg) => {
    try{
        const response = await fetch('json/template.json');
        const data = await response.json();
        return data;
    }catch(error){
        alert(error)
    }
})


const userSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers:{
        [searchUser.Pending]: (state) => {
            console.log('loading')
        },
        [searchUser.fulfilled]: (state, action) => {
            state = action.payload
            return state
        },
        [searchUser.reject]: (state) => {
            console.log('fail')
        }
    }
})

export default userSlice.reducer
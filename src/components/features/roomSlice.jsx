import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
}



export const searchRoom = createAsyncThunk('search/searchRoom', async (arg) => {
    try {
        if (arg === 'get') {
            const response = await fetch(`json/rooms.json`);
            const data = response.json();
            return data;
        } else if (arg === 'put') {
            fetch(`../../json/rooms.json`, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(arg.data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else if (arg === 'delete') {
            fetch(`../../json/rooms.json`, {
                method: 'DELETE',
                body: JSON.stringify(arg.id),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else if (arg === 'create') {
            fetch(`../../json/rooms.json`, {
                method: 'CREATE',
                body: JSON.stringify(arg.data),
                headers: {
                    'asdasd': 'asdasdasd'
                }
            })
        }
    }
    catch (error) {
        alert(error)
    }
})





const roomSlice = createSlice({
    name: 'room',
    initialState,
    extraReducers: {
        [searchRoom.pending]: (state) => {
            console.log('Loading')
        },
        [searchRoom.fulfilled]: (state, action) => {
            state = action.payload
            return state
        },
        [searchRoom.reject]: (state) => {
            console.log('fail')
        }
    }
})



export default roomSlice.reducer
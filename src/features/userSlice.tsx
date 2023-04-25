import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState: object[] = []




export const searchUser: any = createAsyncThunk('search/searchUser', async (arg) => {
    try{
        const response = await fetch('json/template.json');
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        alert(error)
    }
})


const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers:{
        [searchUser.Pending]: (state) => {
            console.log('loading')
        },
        [searchUser.fulfilled]: (state, action: PayloadAction<object[]>) => {
            state = action.payload
            return state
        },
        [searchUser.reject]: (state) => {
            console.log('fail')
        }
    }
})

export default userSlice.reducer
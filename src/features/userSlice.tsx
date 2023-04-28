import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface IUser {
    id: 1;
    name: string;
    email: string;
    startDate: Date;
    description: string;
    conctac: number;
    status: boolean;
    password: number;
  }

const initialState: IUser[] = []




export const searchUser: any= createAsyncThunk('search/searchUser', async (arg) => {
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
        [searchUser.fulfilled]: (state, action: PayloadAction<IUser[]>) => {
            state = action.payload
            return state
        },
        [searchUser.reject]: (state) => {
            console.log('fail')
        }
    }
})

export const selectUser = (state: RootState) => state

export default userSlice.reducer
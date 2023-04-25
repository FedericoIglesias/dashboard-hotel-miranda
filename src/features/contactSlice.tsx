import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState: object[] = []




export const searchContact: any = createAsyncThunk('search/searchContact', async arg => {
    try{
        const response = await fetch('json/mail.json')
        const data = await response.json()
        return data
    }catch(error){
        alert(error)
    }
})


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers:{
        [searchContact.Pending]: (state) => {
            console.log('loading')
        },
        [searchContact.fulfilled]: (state, action: PayloadAction<object[]>) => {
            state = action.payload
            return state
        },
        [searchContact.reject]: (state) => {
            console.log('fail')
        }
    }
})

export default contactSlice.reducer
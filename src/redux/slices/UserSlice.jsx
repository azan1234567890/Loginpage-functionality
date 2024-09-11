import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        Increment: (state,action)=>{
state.value = action.payload
console.log(action.payload, 'p')
        }
    }
});
export const {Increment} = userSlice.actions
export default userSlice.reducer
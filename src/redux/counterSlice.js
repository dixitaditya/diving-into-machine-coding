import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:100
}

export const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers:{
        increment:(state)=>{
            state.count=state.count+1 // handles by immer
        },
        decrement:(state)=>{
             state.count=state.count-1  // handles by immer
        },
    }
})

export const {increment, decrement} = counterSlice.actions;


import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./redux/counterSlice";
import {userSlice} from "./redux/userSlice"

const store = configureStore({
    reducer:{
        myCounter: counterSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;
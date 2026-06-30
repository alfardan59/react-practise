import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export const store=configureStore({
    reducer:{
        //Now we will make slices/features
        counter:counterReducer
    }
})
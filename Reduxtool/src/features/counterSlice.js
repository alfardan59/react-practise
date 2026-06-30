import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter', //This is a good practise to tell whose name or initial state is this
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{ //Here the value is state
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementBy5:(state,actions)=>{ //Here the value is state
            state.value+=actions.payload;
        },
        decrementBy5:(state,actions)=>{ //Here the value is state
            state.value-=actions.payload;
        },
    }
})

export const {increment, decrement, incrementBy5, decrementBy5}=counterSlice.actions //Here we are telling from where the actions are being exported

export default counterSlice.reducer
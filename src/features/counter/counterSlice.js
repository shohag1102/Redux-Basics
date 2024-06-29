import {createSlice} from "@reduxjs/toolkit";

// slice name dear karon holo
// redux er niyom and list of action gula eksathe thkbe

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        }
    }
})

console.log('[counterSlice reducer]', counterSlice)

export const {increment, decrement, reset, incrementByValue} = counterSlice.actions

// counterSlice.reducer user korar karon hoilo counterSlice er vitor reducer ase not reducers
export default counterSlice.reducer
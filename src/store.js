import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice.js";
// export default use korle {} er vitor "HOBE NA"

let store = configureStore({
    // reducer er vitor reducers gula rakhbo
    // ekta name dibo and slice gula anbo and combine korte parbo
    reducer: {
        counter: counterSlice,
        // todos: todosSlice
    }
})

export default store
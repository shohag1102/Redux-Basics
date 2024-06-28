const {createStore, applyMiddleware} = require("redux");
const {logger} = require("redux-logger");

// state
let userState = {
    user: [],
    count: 0
}

// create the reducer
let userReducer = (state = userState, action) => {
    if (action.type === 'ADD_USER') {
        return {
            user: [...state.user, action.payload],
            count: state.count + 1,
        }
    }
    return state
}

let addUserFunc = (userName) => {
    return {
        type: 'ADD_USER',
        payload: userName
    }
}

// by applying middlewares i can see what is the prev states and changes in the
// updated states with time and action type as well
let store = createStore(userReducer, applyMiddleware(logger))


store.subscribe(()=>{
    console.log("[Subscribe]", store.getState())
})

store.dispatch(addUserFunc("Shohag"))
store.dispatch(addUserFunc("Sagar"))
store.dispatch(addUserFunc("Lima"))



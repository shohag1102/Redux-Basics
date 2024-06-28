const {createStore} = require("redux");

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

let store = createStore(userReducer)


store.subscribe(()=>{
    console.log("[Subscribe]", store.getState())
})

store.dispatch(addUserFunc("Shohag"))
store.dispatch(addUserFunc("Sagar"))
store.dispatch(addUserFunc("Lima"))



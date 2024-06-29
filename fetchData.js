const redux = require('redux')
const {createStore, applyMiddleware} = require("redux");
const {thunk} = require("redux-thunk");
const axios = require("axios");

const GET_REQUEST = 'GET_REQUEST'
const GET_SUCCESS = 'GET_SUCCESS'
const GET_FAILURE = 'GET_FAILURE'
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

let initialState = {
    isLoading: false,
    todos: [],
    isFailure: null,
}

let rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
            }
        case GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                isFailure: action.payload,
            }
        default:
            return state
    }
}

let store = createStore(rootReducer, applyMiddleware(thunk))

let getRequest = () => {
    return {
        type: "GET_REQUEST",
    }
}
let getSuccess = (data) => {
    return {
        type: "GET_SUCCESS",
        payload: data,
    }
}
let getFailure = (error) => {
    return {
        type: "GET_FAILURE",
        payload: error,
    }
}

let fetchData = () => {
    return (dispatch) => {
        dispatch(getRequest())
        axios.get(API_URL)
            .then(res => {
                // console.log(res.data.length)
                let reducedArr = res.data.slice(0, 5)
                dispatch(getSuccess(reducedArr))
            })
            .catch(err => dispatch(getFailure(err.message)))
    }
}

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())

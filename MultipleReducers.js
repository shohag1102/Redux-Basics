const redux = require('redux')
const {createStore, combineReducers} = require("redux");

// initial states
let productState = {
    products: ["Mango", "Orange"],
    numProducts: 2,
}

let cartState = {
    products: ["Olive"],
    numProducts: 1,
}

// product reducer
let productReducer = (state = productState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state
            }
        case 'ADD_PRODUCT':
            return {
                products: [...state.products, action.payload],
                numProducts: state.numProducts + 1,
            }
        default:
            return {
                ...state
            }
    }
}

// cart reducer
let cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state
            }
        case 'ADD_TO_CART':
            return {
                products: [...state.products, action.payload],
                numProducts: state.numProducts + 1,
            }
        default:
            return {
                ...state
            }
    }
}

// create root reducer
let rootReducer = combineReducers({
    prodR : productReducer,
    cartReducer : cartReducer,
})

// create store
// let store = createStore(productReducer)
let store = createStore(rootReducer)

// products dispatches
let getProducts = () => {
    return {
        type: "GET_PRODUCTS",
    }
}
let addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

// cart dispatches
let getCart = () => {
    return {
        type: "GET_CART",
    }
}
let addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

// subscribe
store.subscribe(() => {
    console.log("[Subscribe]", store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProduct("Tomato"))

store.dispatch(getCart())
store.dispatch(addToCart("Lime"))

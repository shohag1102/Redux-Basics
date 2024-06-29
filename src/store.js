import counterReducer from './services/reducers/counterReducer.js';
import {createStore} from 'redux'
let store = createStore(counterReducer)

export default store;

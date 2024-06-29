import {INCREMENT, DECREMENT, RESET} from '../constants/counterConstants';

export let incrementCounter = () =>{
    return{
        type: INCREMENT
    }
}

export let decrementCounter = () =>{
    return{
        type: DECREMENT
    }
}
export let resetCounter = () =>{
    return{
        type: RESET
    }
}
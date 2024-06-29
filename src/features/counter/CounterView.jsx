import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByValue, reset} from "./counterSlice.js";

const CounterView = () => {
    let counter = useSelector(state => {
        console.log('[state]', state.counter.count)
        return state.counter.count
    });
    let dispatch = useDispatch();
    return (
        <div>
            <h1>Count : {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(10))}>IncrementByValue</button>
        </div>
    );
};

export default CounterView;

import {useSelector, useDispatch} from 'react-redux'
import {incrementCounter, decrementCounter, resetCounter} from '../services/actions/counterActions.js'

const Counter = () => {
    let counter = useSelector(state => {
        console.log(state)
        return state.counter
    })
    let dispatch = useDispatch()
    let handleIncrement = () => {
        console.log('handleIncrement', dispatch(incrementCounter()))
        console.log(counter)
    }
    let handleDecrement = () => {
        dispatch(decrementCounter())
    }
    let handleReset = ()=>{
        dispatch(resetCounter())
    }
    return (
        <div>
            <p>Count : {counter}</p>
            <div style={{
                marginBottom: '10px',
            }}>
                <button style={{
                    marginRight: '10px',
                }} onClick={handleIncrement}>Increment
                </button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

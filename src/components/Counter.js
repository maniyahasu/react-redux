import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/CounterActions';

const padding = {
    padding: '1rem'
}

const Counter = () => {
    const state = useSelector((state) => state.incrementCountReducer);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0);
    // const incrementCount = () => {
    //     setCount(count + 1);
    //     // console.log('incrementCount', count);
    // }
    // const decrementCount = () => {
    //     setCount(count - 1);
    //     // console.log('decrementCount', count);
    // }
    return (
        <>
            <div style={padding}>
                <button onClick={() => dispatch(incrementCount())}>+</button>
                <div>{state}</div>
                <button onClick={() => dispatch(decrementCount())}>-</button>
            </div>
        </>
    );
}

export default Counter;
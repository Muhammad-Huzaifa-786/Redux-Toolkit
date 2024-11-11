// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Slice/CounterSlice';

const Counter = () => {
  // Get the current counter value from the Redux store
  const count = useSelector((state) => state.counter.value);
  
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset(3))}>Reset</button>
    </div>
  );
};

export default Counter;

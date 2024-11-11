// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Slice/JobsSlice';

const Jobs = () => {
  // Get the current counter value from the Redux store
  const count = useSelector((state) => state.jobs.value);
  
  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Jobs: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Jobs;

// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the state
const JobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    value: 0,
  },
  reducers: {
    // Action to increment the counter
    increment: (state) => {
      state.value += 1;
    },
    // Action to decrement the counter
    decrement: (state) => {
      state.value -= 1;
    },
    // Action to reset the counter
    reset: (state) => {
      state.value = 0 ;
    },
  },
});
const { actions, reducer } = JobsSlice
// Export the actions so they can be dispatched in components
export const { increment, decrement, reset } = actions;

// Export the reducer to be used in the store
export default reducer;

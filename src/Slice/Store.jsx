// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Slice/CounterSlice'
// Set up the store with the counter reducer
import JobsReducer from '../Slice/JobsSlice'
const store = configureStore({
    reducer: {
        counter: CounterReducer,
        jobs: JobsReducer
    },
});

export default store;

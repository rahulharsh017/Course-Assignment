import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice.js';
import studentsReducer from './studentSlice.js';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    students: studentsReducer,
  },
});

export default store;

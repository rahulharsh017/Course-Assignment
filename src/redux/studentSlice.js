import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrolledCourses: [],
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    enrollCourse(state, action) {
      state.enrolledCourses.push(action.payload);
    },
    markAsCompleted(state, action) {
      const course = state.enrolledCourses.find(c => c.id === action.payload);
      if (course) {
        course.completed = true;
      }
    },
  },
});

export const { enrollCourse, markAsCompleted } = studentsSlice.actions;
export default studentsSlice.reducer;

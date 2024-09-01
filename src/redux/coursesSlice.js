import { createSlice } from '@reduxjs/toolkit';
import mockData from '../assets/MOCK_DATA.json' assert { type: 'json' };

const initialState = {
  courses: mockData,
  selectedCourse: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse(state, action) {
      state.selectedCourse = action.payload;
    },
  },
});

export const { selectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

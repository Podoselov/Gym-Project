import { createSlice } from '@reduxjs/toolkit';
import { Training } from './typeTraining';

const initialState: Training = {
  training: [],
};

export const todoSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;

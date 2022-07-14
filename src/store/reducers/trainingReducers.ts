import { createSlice } from '@reduxjs/toolkit';
import { Training } from './typeTraining';

const initialState: Training = {
  training: [],
  trainingId: '',
};

export const todoSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    addTrainingId(state, action) {
      state.trainingId = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { addTrainingId } = todoSlice.actions;
export default todoSlice.reducer;

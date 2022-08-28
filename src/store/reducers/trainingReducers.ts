import { createSlice } from '@reduxjs/toolkit';
import { Training } from './typeTraining';

const initialState: Training = {
  training: [],
  login: { nameMail: '', email: '', id: '', training: '', remember: false },
  trainingId: '',
};

export const todoSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    addTrainingId(state, action) {
      state.trainingId = action.payload;
    },
    loginUser(state, action) {
      state.login = action.payload;
    },
    logoutUser(state) {
      state.login = {
        nameMail: '',
        email: '',
        id: '',
        training: '',
        remember: false,
      };
    },
    addTraining(state, action) {
      state.training = state.training.filter(
        (element) => element.id !== action.payload.id
      );
      state.training.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { addTrainingId, loginUser, logoutUser, addTraining } =
  todoSlice.actions;
export default todoSlice.reducer;

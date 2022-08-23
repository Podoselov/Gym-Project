import { createSlice } from '@reduxjs/toolkit';
import { Training } from './typeTraining';

const initialState: Training = {
  training: [],
  login: { nameMail: '', email: '', id: '', remember: false },
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
        remember: false,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { addTrainingId, loginUser, logoutUser } = todoSlice.actions;
export default todoSlice.reducer;

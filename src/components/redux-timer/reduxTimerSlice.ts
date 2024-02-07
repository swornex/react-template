import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface InitialStateI {
  timer: number;
  isTimerOn: boolean;
}

const initialState: InitialStateI = {
  timer: 300,
  isTimerOn: false,
};

const reduxTimerSlice = createSlice({
  name: 'reduxTimer',
  initialState,
  reducers: {
    increment: (state) => {
      state.timer += 1;
    },
    decrement: (state) => {
      state.timer -= 1;
      state.isTimerOn = true;
    },
    reset: (state) => {
      state.timer = initialState.timer;
      state.isTimerOn = initialState.isTimerOn;
    },
    toggleIsTimerOn: (state) => {
      state.isTimerOn = !state.isTimerOn;
    },
  },
});

export const { increment, decrement, reset, toggleIsTimerOn } =
  reduxTimerSlice.actions;

export const selectReduxTimer = (state: RootState) => state.reduxTimer;

export default reduxTimerSlice.reducer;

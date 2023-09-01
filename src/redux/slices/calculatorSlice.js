import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      if (state.value[0] === '0') {
        state.value = '';
      }
      state.value += action.payload;
    },
    sinValue: (state) => {
      state.value = Math.sin(state.value * (Math.PI / 180)).toFixed(2);
      state.value = String(state.value);
    },

    cosValue: (state) => {
      state.value = Math.cos(state.value * (Math.PI / 180)).toFixed(2);
      state.value = String(state.value);
    },
    tanValue: (state) => {
      state.value = Math.tan(state.value * (Math.PI / 180)).toFixed(2);
      state.value = String(state.value);
    },
    powValue: (state) => {
      state.value = Math.pow(state.value, 2);
      state.value = String(state.value);
    },
    deleteVallue: (state) => {
      state.value = '0';
    },
    removeValue: (state) => {
      if (state.value.length === 1) {
        state.value = '0';
        return;
      }
      state.value = state.value.slice(0, -1);
    },
    calculateValue: (state) => {
      state.value = String(eval(state.value));
    },
  },
});
export const {
  incrementByAmount,
  deleteVallue,
  removeValue,
  calculateValue,
  sinValue,
  cosValue,
  tanValue,
  powValue,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

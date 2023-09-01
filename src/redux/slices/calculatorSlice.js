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
export const { incrementByAmount, deleteVallue, removeValue, calculateValue } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;

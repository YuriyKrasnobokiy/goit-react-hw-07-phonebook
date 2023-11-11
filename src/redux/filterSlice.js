import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    redChangeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { redChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

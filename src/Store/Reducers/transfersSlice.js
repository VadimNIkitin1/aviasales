import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentFilters: [],
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.currentFilters = action.payload;
    },
  },
});

export const transfersReducer = transfersSlice.reducer;
export const { setFilters } = transfersSlice.actions;

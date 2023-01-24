import { createSlice } from '@reduxjs/toolkit';

import { Filter } from '../../Common/filter';

const initialState = {
  currentFilter: Filter.Cheap,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

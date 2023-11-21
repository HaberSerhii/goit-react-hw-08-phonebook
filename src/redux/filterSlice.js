import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    ChangeFilter(state, actions) {
      return (state = actions.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { ChangeFilter } = filterSlice.actions;

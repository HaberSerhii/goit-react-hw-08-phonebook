import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  userData: {
    name: null,
    email: null,
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {},
});

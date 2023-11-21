import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, signUp } from './authOperations';

const authInitialState = {
  userData: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signOut.fulfilled, state => {
        return authInitialState;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  reducers: {},
});

export const authReducer = authSlice.reducer;

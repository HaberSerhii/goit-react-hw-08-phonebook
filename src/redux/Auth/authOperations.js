import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      if (error?.response?.data?.name === 'MongoError') {
        alert('Цей користувач вже зареєстрований');
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/signOut', async thunkApi => {
  try {
    const { data } = await instance.post('/users/logout');
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios.js';
import { ILogin, User } from '../types/auth.types.js';
import { IErrorMessage } from '../types.js';


export const loginThunk = createAsyncThunk< User, ILogin, {rejectValue: IErrorMessage} >('auth/login', async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<User>('/auth/login', loginInfo);
      const user = response.data;

      localStorage.setItem('authToken', user.token);

      return user;
    } catch (err: any) {
        return rejectWithValue(err.response?.data || { message: 'Failed to login' });
    }
  });
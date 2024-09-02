import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../types/auth.types';
import { loginThunk } from '../thunks/auth.thunk';
import { RootState } from "../types";


const initialState: AuthState = {
    user: {
        _id: '',
        fullName: '',
        email: '',
        avatarUrl: '',
        createdAt: '',
        updatedAt: '',
        __v: null,
        token: ''
    },
    isAuth: false,
    status: 'init'
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuth = true
        state.status = 'success';
        console.log('login is success')
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'error';
        console.error("Failed to login", action.payload?.message);
      })
  }
});


export const selectUser = (state: RootState) => state.authSlice.user
export const selectIsAuthenticated = (state: RootState) => state.authSlice.isAuth


export default authSlice.reducer;

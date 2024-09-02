import { Middleware } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';
import { RootState } from '../types';

// export const tokenInjector: Middleware<{}, RootState> = (storeAPI) => (next) => (action) => {
//   const token = storeAPI.getState().authSlice.user?.token;

//   if (token) {
//     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }

//   return next(action);
// };
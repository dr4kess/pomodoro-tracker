import { createAsyncThunk } from '@reduxjs/toolkit';
import { IErrorMessage } from '../types';
import { Habit, IHabitRequest, IHabitUpdateRequest } from '../types/habits.types';

import axiosInstance from '../../api/axios.js';

export const createHabitThunk = createAsyncThunk< Habit, IHabitRequest, {rejectValue: IErrorMessage} >('habits/create', async (habitInfo, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post<Habit>('/habits', habitInfo);
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response.data);
      }
    });

    export const updateHabitThunk = createAsyncThunk< Habit, IHabitUpdateRequest, {rejectValue: IErrorMessage} >('habits/update', async (habitInfo, { rejectWithValue }) => {
      const { id } = habitInfo;
      try {
        const response = await axiosInstance.put<Habit>(`/update-habit/${id}`, habitInfo);
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response?.data || { message: 'Failed to update habit' });
      }
    }
  );

export const getHabitsThunk = createAsyncThunk< Habit[], void, {rejectValue: IErrorMessage} >('habits/getAll', async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Habit[]>('/habits');
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data as IErrorMessage);
    }
  });
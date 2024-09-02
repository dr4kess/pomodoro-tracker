import { createAsyncThunk } from '@reduxjs/toolkit';
import { IErrorMessage } from '../types.js';
import { ITaskRequest, Task } from '../types/tasks.types';

import axiosInstance from '../../api/axios.js';

export const createTaskThunk = createAsyncThunk< Task, ITaskRequest, {rejectValue: IErrorMessage} >('tasks/create', async (taskInfo, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post<Task>('/tasks', taskInfo);
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response.data);
      }
    });

export const updateTaskThunk = createAsyncThunk< Task, ITaskRequest, {rejectValue: IErrorMessage} >('tasks/update', async (taskInfo, { rejectWithValue }) => {
    const { id } = taskInfo;
    try {
      const response = await axiosInstance.patch<Task>(`/tasks/${id}`, taskInfo);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || { message: 'Failed to update habit' });
    }
  }
);

export const getTasksThunk = createAsyncThunk< Task[], void, {rejectValue: IErrorMessage} >('tasks/getAll', async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Task[]>('/tasks');
      console.log('get Tasks Thunk')
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data as IErrorMessage);
    }
  });
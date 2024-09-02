import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { Task, TasksState } from "../types/tasks.types";
import { differenceInCalendarDays, isSameDay } from "date-fns";
import { createTaskThunk, getTasksThunk } from "../thunks/tasks.thunk";

const initialState:TasksState = {
    tasks: [],
    selectedTask: null,
    isCreatingTask: false,
    isViewingTask: false,
    isEditingTask: false,
    isModalOpen: false,
    status: 'init'
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
          // deleteTask: (state, action: PayloadAction<string>) => {
          //   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
          //   state.isEditingTask = false;
          // },
        editTask: (state, action: PayloadAction<Task>) => {
          const index = state.tasks.findIndex(task => task.id === action.payload.id);
          if (index !== -1) {
              state.tasks[index] = action.payload;
          }
          state.isModalOpen = false;

          state.selectedTask = null;
          state.isCreatingTask= false,
          state.isViewingTask= false,
          state.isEditingTask= false
        },
        completeTask: (state, action: PayloadAction<string>) => {
          const task = state.tasks.find((task) => task.id === action.payload);
          if (task) {
            task.isCompleted = true;
          }
        },
        setEditingTask: (state, action: PayloadAction<Task | null>) => {
          state.isModalOpen = true;

          state.selectedTask = action.payload;
          state.isViewingTask= false;
          state.isEditingTask = true;
          state.isCreatingTask = false;
        },
        setCreatingTask: (state) => {
          state.isModalOpen = true;

          state.selectedTask = null;
          state.isViewingTask= false;
          state.isEditingTask = false;
          state.isCreatingTask = true;
        },
        setViewingHabit: (state, action: PayloadAction<Task | null>) => {
          state.isModalOpen = true;

          state.selectedTask = action.payload;
          state.isViewingTask= true;
          state.isEditingTask = false;
          state.isCreatingTask = false;
        },
        setReset: (state) => {
          state.isModalOpen = false;
          
          state.selectedTask = null;
          state.isViewingTask= false;
          state.isEditingTask = false;
          state.isCreatingTask = false;
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTasksThunk.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getTasksThunk.fulfilled, (state, action: PayloadAction<Task[]>) => {
          state.tasks = action.payload;
          state.status = 'success';
        })
        .addCase(getTasksThunk.rejected, (state, action) => {
          state.status = 'error';
          console.error("Failed to fetch tasks:", action.payload?.message);
        })
       ////

        .addCase(createTaskThunk.pending, (state) => {
          state.status = 'loading'
      })
        .addCase(createTaskThunk.fulfilled, (state) => {
          state.isModalOpen = false;

          state.isCreatingTask = false;
          state.isEditingTask = false;
          state.isViewingTask = false;
          state.selectedTask = null;

          state.status = 'success'
          
        })
        .addCase(createTaskThunk.rejected, (state) => {
          state.status = 'error';
          console.error("Failed to fetch tasks")
        })
        ////

        // .addCase(updateHabitThunk.pending, (state) => {
        //   state.status = 'loading';
        // })
        // .addCase(updateHabitThunk.fulfilled, (state) => {
        //   state.isModalOpen = false;

        //   state.isCreatingHabit = false;
        //   state.isEditingHabit = false;
        //   state.isViewingHabit = false;
        //   state.selectedHabit = null;

        //   state.status = 'success'
          
        // })
        // .addCase(updateHabitThunk.rejected, (state) => {
        //   state.status = 'error';
        //   console.error("Failed to fetch habits")
        // })
    }
})


//ACTIONS
export const tasksActions  = tasksSlice.actions;

//SELECTORS
export const selectTasks = ( state: RootState ) => state.tasksSlice.tasks;
export const selectSelectedTask = (state: RootState) => state.tasksSlice.selectedTask

export const selectIsCreatingTask = (state: RootState) => state.tasksSlice.isCreatingTask
export const selectIsEditingTask = (state: RootState) => state.tasksSlice.isEditingTask
export const selectIsViewingTask = (state: RootState) => state.tasksSlice.isViewingTask

export const selectIsTaskModalOpen = (state: RootState) => state.tasksSlice.isModalOpen;

export const selectTodayTasks = createSelector(
  [selectTasks],
  (tasks: Task[]) => {
      const today = new Date();
      return tasks.filter(task => isSameDay(new Date(task.dueDate), today));
  }
);

export const selectUpcomingTasks = createSelector(
  [selectTasks],
  (tasks: Task[]) => {
      const today = new Date();
      return tasks.filter(task => new Date(task.dueDate) > today);
  }
);

export default tasksSlice.reducer;
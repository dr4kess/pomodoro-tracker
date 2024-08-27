import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { Task, TasksState } from "../types/tasks.types";
import { differenceInCalendarDays } from "date-fns";

const initialState:TasksState = {
    tasks: [
        {   id:'blablabla',
            title:'Write a code',
            createDate: new Date(),
            dueDate: new Date(),
            isCompleted: false,
            habitId: ''
        }
    ],
    isCreatingTask: false,
    isEditingTask: false
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        setIsCreatingTask: (state) => {
            state.isCreatingTask = true
        },
        cancelCreatingTask: (state) => {
          state.isCreatingTask = false
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
            state.isCreatingTask = false
          },
          completeTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
              task.isCompleted = true;
            }
          },
          setIsEditingTask: (state) => {
            state.isCreatingTask = false
            state.isEditingTask = true
            },
          deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            state.isEditingTask = false;
          },
    }
})


//ACTIONS
export const tasksActions  = tasksSlice.actions;

//SELECTORS
export const selectIsCreatingTask = ( state: RootState ) => state.tasksSlice.isCreatingTask;
export const selectIsEditingTask = ( state: RootState ) => state.tasksSlice.isEditingTask;
export const selectDailyTasks = createSelector(
    (state: RootState) => state.tasksSlice.tasks,
    (tasks) => tasks.filter(task => differenceInCalendarDays(task.dueDate, new Date()) === 0)
  );
  
  export const selectUpcomingWeekTasks = createSelector(
    (state: RootState) => state.tasksSlice.tasks,
    (tasks) => tasks.filter(task => {
      const daysDifference = differenceInCalendarDays(task.dueDate, new Date());
      return daysDifference > 0 && daysDifference <= 7;
    })
  );

export default tasksSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HabitsState, Habit } from "../types/habits.types";
import { RootState } from "../types";
import { createHabitThunk, getHabitsThunk, updateHabitThunk } from "../thunks/habits.thunk";

const initialState: HabitsState = {
    habits: [],
    selectedHabit: null,
    isCreatingHabit: false,
    isViewingHabit: false,
    isEditingHabit: false,
    isModalOpen: false,
    status: 'init'
  };

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers:{
        editHabit: (state, action: PayloadAction<Habit>) => {
            const index = state.habits.findIndex(habit => habit._id === action.payload._id);
            if (index !== -1) {
                state.habits[index] = action.payload;
            }
            state.isModalOpen = false;

            state.selectedHabit = null;
            state.isCreatingHabit= false,
            state.isViewingHabit= false,
            state.isEditingHabit= false
        },
        setViewingHabit: (state, action: PayloadAction<Habit | null>) => {
            state.isModalOpen = true;

            state.selectedHabit = action.payload;
            state.isViewingHabit= true;
            state.isEditingHabit = false;
            state.isCreatingHabit = false;
        },
        setEditingHabit: (state, action: PayloadAction<Habit | null>) => {
            state.isModalOpen = true;

            state.selectedHabit = action.payload;
            state.isViewingHabit= false;
            state.isEditingHabit = true;
            state.isCreatingHabit = false;
        },
        setCreatingHabit: (state) => {
            state.isModalOpen = true;

            state.selectedHabit = null;
            state.isViewingHabit= false;
            state.isEditingHabit = false;
            state.isCreatingHabit = true;
        },
        setReset: (state) => {
            state.isModalOpen = false;

            state.selectedHabit = null;
            state.isViewingHabit= false;
            state.isEditingHabit = false;
            state.isCreatingHabit = false;
        },
        incrementHabitProgress: (state, action: PayloadAction<string>) => {
            const habit = state.habits.find(habit => habit._id === action.payload);
            if (habit && habit.completedCount < habit.count) {
              habit.completedCount += 1;
            }
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getHabitsThunk.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getHabitsThunk.fulfilled, (state, action: PayloadAction<Habit[]>) => {
            state.habits = action.payload;
            state.status = 'success';
          })
          .addCase(getHabitsThunk.rejected, (state, action) => {
            state.status = 'error';
            console.error("Failed to fetch habits:", action.payload?.message);
          })
        ////

          .addCase(createHabitThunk.pending, (state) => {
            state.status = 'loading'
        })
          .addCase(createHabitThunk.fulfilled, (state) => {
            state.isModalOpen = false;

            state.isCreatingHabit = false;
            state.isEditingHabit = false;
            state.isViewingHabit = false;
            state.selectedHabit = null;

            state.status = 'success'
            
          })
          .addCase(createHabitThunk.rejected, (state) => {
            state.status = 'error';
            console.error("Failed to fetch habits")
          })
          ////

          .addCase(updateHabitThunk.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(updateHabitThunk.fulfilled, (state) => {
            state.isModalOpen = false;

            state.isCreatingHabit = false;
            state.isEditingHabit = false;
            state.isViewingHabit = false;
            state.selectedHabit = null;

            state.status = 'success'
            
          })
          .addCase(updateHabitThunk.rejected, (state) => {
            state.status = 'error';
            console.error("Failed to fetch habits")
          })
      }
})


//ACTIONS
export const habitsActions  = habitsSlice.actions;

//SELECTORS
export const selectHabits = ( state: RootState ) => state.habitsSlice.habits;
export const selectSelectedHabit = (state: RootState) => state.habitsSlice.selectedHabit

export const selectIsCreatingHabit = (state: RootState) => state.habitsSlice.isCreatingHabit
export const selectIsEditingHabit = (state: RootState) => state.habitsSlice.isEditingHabit
export const selectIsViewingHabit = (state: RootState) => state.habitsSlice.isViewingHabit

export const selectIsHabitModalOpen = (state: RootState) => state.habitsSlice.isModalOpen;

export default habitsSlice.reducer;
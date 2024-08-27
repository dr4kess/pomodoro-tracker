import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 'home',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
});


export default appSlice.reducer;

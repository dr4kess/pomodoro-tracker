import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers.ts';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});



export const dispatch = store.dispatch;


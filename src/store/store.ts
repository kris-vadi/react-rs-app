import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { querySlice } from './slises/querySlise';

const rootReducer = combineReducers({
  query: querySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

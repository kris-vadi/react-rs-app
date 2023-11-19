import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { querySlice } from './slises/querySlise';
import { charactersApi } from '../services/charactersApi';
import { cardsLoader, detailsLoader } from './slises/loadersSlice';

const rootReducer = combineReducers({
  query: querySlice.reducer,
  cardsLoader: cardsLoader.reducer,
  detailsLoader: detailsLoader.reducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

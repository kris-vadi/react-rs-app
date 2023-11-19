import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../types/types';

export const initialState: LoadingState = {
  value: true,
};

export const cardsLoader = createSlice({
  name: 'cardsLoader',
  initialState,
  reducers: {
    setCardsLoader(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const detailsLoader = createSlice({
  name: 'detailsLoader',
  initialState,
  reducers: {
    setDetailsLoader(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination } from '../../types/types';

const initialState: { value: Pagination } = {
  value: {
    next: undefined,
  },
};

export const paginationSlice = createSlice({
  name: 'paginationData',
  initialState,
  reducers: {
    setPaginationData(state, action: PayloadAction<Pagination>) {
      state.value = action.payload;
    },
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchData } from '../../types/types';

const initialState: SearchData = {
  searchInputValue: '',
  pageLimit: '10',
  page: 1,
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchInputValue = action.payload;
      state.page = 1;
    },
    setPageLimit(state, action: PayloadAction<string>) {
      state.pageLimit = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

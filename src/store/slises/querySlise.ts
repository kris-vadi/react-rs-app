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
      console.log(state);
      console.log(action);
      state.searchInputValue = action.payload;
    },
    setPageLimit(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
      state.pageLimit = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      console.log(state);
      console.log(action);
      state.page = action.payload;
    },
  },
});

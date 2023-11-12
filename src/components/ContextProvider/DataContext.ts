import { createContext } from 'react';
import { SearchData } from '../../types/types';

interface DataContextParams {
  searchData: SearchData;
  setSearchData: (searchData: SearchData) => void;
}

const initData: SearchData = {
  searchInputValue: '',
  pageLimit: '10',
  page: 1,
};

export const DataContext = createContext<DataContextParams>({
  searchData: initData,
  setSearchData: () => {},
});

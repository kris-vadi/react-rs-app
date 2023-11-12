import { Dispatch } from 'react';
import { SearchData } from '../../types/types';

export interface SearchProps {
  setSearchData: Dispatch<React.SetStateAction<SearchData>>;
  searchData: SearchData;
}

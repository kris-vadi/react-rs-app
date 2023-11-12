import { Dispatch } from 'react';
import { SearchData } from '../../types/types';

export interface SearchLimitProps {
  setSearchData: Dispatch<React.SetStateAction<SearchData>>;
  searchData: SearchData;
}

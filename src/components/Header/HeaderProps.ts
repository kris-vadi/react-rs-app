import { Dispatch } from 'react';
import { SearchData } from '../../types/types';

export interface HeaderProps {
  setSearchData: Dispatch<React.SetStateAction<SearchData>>;
  searchData: SearchData;
}

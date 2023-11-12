import { Dispatch } from 'react';
import { ResponseData, SearchData } from '../../types/types';

export interface PaginationProps {
  setSearchData: Dispatch<React.SetStateAction<SearchData>>;
  searchData: SearchData;
  responseData: ResponseData | undefined;
}

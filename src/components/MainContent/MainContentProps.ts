import { Dispatch } from 'react';
import { ResponseData, SearchData } from '../../types/types';

export interface MainContentProps {
  setSearchData: Dispatch<React.SetStateAction<SearchData>>;
  searchData: SearchData;
  responseData: ResponseData | undefined;
  isLoading: boolean;
}

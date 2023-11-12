import { createContext } from 'react';
import { ResponseData } from '../../types/types';

interface ResponseDataContextParams {
  responseData: ResponseData | undefined;
  isLoading: boolean;
}

export const ResponseDataContext = createContext<ResponseDataContextParams>({
  responseData: undefined,
  isLoading: true,
});

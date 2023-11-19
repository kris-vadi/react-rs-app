import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardResponseData, ResponseData, SearchData } from '../types/types';

export const charactersApi = createApi({
  reducerPath: 'characrersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.potterdb.com/v1/characters',
  }),
  endpoints: (build) => ({
    getCards: build.query<ResponseData, SearchData>({
      query: ({ searchInputValue, pageLimit, page }) =>
        `?filter[name_cont]=${searchInputValue}&page[number]=${page}&page[size]=${pageLimit}`,
    }),
    getCardInfo: build.query<CardResponseData, string>({
      query: (id: string) => `/${id}`,
    }),
  }),
});

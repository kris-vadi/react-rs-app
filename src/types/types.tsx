import { ReactNode } from 'react';

export type CardParams = {
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
};

export type ResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CardParams[];
};

export type SearchData = {
  searchInputValue: string | null;
  page: number;
};

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export interface CardsListProps {
  cards: CardParams[] | undefined;
  isLoading: boolean;
  query: string;
}

export interface SearchProps {
  inputInitialValue: string | null;
  onSearch: (value: string) => void;
}

export interface CardProps {
  itemData: CardParams;
  query: string;
}

export interface PaginationProps {
  onPage: (page: number) => void;
  responseData: ResponseData | undefined;
  page: number;
}

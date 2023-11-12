import { ReactNode } from 'react';

export type CardParams = {
  id: string;
  attributes: ActorAttributes;
};

export type CardResponseData = {
  data: CardParams;
  meta: Meta;
};

export type ResponseData = {
  data: CardParams[];
  meta: Meta;
};

type ActorAttributes = {
  slug: string;
  name: string | null;
  gender: string | null;
  nationality: string | null;
  blood_status: string | null;
  image: string | undefined;
  species: string | null;
};

type Meta = {
  pagination: Pagination;
  copyright: string;
  geterated_at: string;
};

type Pagination = {
  current: number;
  next: number;
  last: number;
  records: number;
};

export type SearchData = {
  searchInputValue: string | null;
  pageLimit: string | number | readonly string[] | undefined;
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
}

export interface SearchProps {
  inputInitialValue: string | null;
  onSearch: (value: string) => void;
}

export interface CardProps {
  itemData: CardParams;
}

export interface CloseButtonProps {
  callback: () => void;
}

export interface ItemInfoLineProps {
  text: string;
  description: string | null | undefined;
}

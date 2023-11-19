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

export type ActorAttributes = {
  slug?: string;
  name?: string | null;
  gender?: string | null;
  nationality?: string | null;
  blood_status?: string | null;
  image?: string | undefined;
  species?: string | null;
};

type Meta = {
  pagination: Pagination;
  copyright: string;
  geterated_at: string;
};

export type Pagination = {
  current?: number;
  next?: number;
  last?: number;
  records?: number;
};

export type SearchData = {
  searchInputValue: string;
  pageLimit: string;
  page: number;
};

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type LoadingState = {
  value: boolean;
};

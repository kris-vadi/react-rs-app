import { ReactNode } from 'react';

export type CardParams = {
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
};

export type ResponseParams = {
  count: number;
  results: CardParams[];
};

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

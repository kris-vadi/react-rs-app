import { CardParams } from '../../types/types';

export interface CardsListProps {
  cards: CardParams[] | undefined;
  isLoading: boolean;
}

import { Component } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';

type CardsListProps = {
  cards: CardParams[];
};

class CardsList extends Component<CardsListProps> {
  constructor(props: CardsListProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.list}>
        {
          this.props.cards.map((card, index) => (
            <Card key={index} itemData={card} />
          ))
        }
      </div>
    );
  }
}

export default CardsList;
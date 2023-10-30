import { Component } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';

type CardsListProps = {
  cards: CardParams[];
  isLoading: boolean;
};

class CardsList extends Component<CardsListProps> {
  render() {
    return (
      <div className={styles.list}>
        {this.props.isLoading ? (
          <div className={styles.loader}></div>
        ) : this.props.cards.length > 0 ? (
          this.props.cards.map((card, index) => (
            <Card key={index} itemData={card} />
          ))
        ) : (
          'Sorry, no items match your search...'
        )}
      </div>
    );
  }
}

export default CardsList;

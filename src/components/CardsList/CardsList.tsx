import { Component } from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';

type CardsListProps = {
  cards: CardParams[];
  isLoading: boolean;
};

class CardsList extends Component<CardsListProps> {
  renderContent() {
    if (this.props.isLoading) {
      return <div className={styles.loader}></div>;
    }

    if (this.props.cards.length > 0) {
      return this.props.cards.map((card, index) => (
        <Card key={index} itemData={card} />
      ));
    }

    return <p>{'Sorry, no items match your search...'}</p>;
  }

  render() {
    return <div className={styles.list}>{this.renderContent()}</div>;
  }
}

export default CardsList;

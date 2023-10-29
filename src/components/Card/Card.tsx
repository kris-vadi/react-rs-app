import { Component } from 'react';
import styles from './Card.module.scss';
import { CardParams } from '../../types/types';

interface CardProps {
  itemData: CardParams;
}

class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { name, diameter, climate, terrain, population } = this.props.itemData;

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.subtitle}>
          diameter: <span className={styles.description}></span>
        </div>
        <div className={styles.subtitle}>
          climate: <span className={styles.description}></span>
        </div>
        <div className={styles.subtitle}>
          terrain: <span className={styles.description}></span>
        </div>
        <div className={styles.subtitle}>
          population: <span className={styles.description}></span>
        </div>
      </div>
    );
  }
}

export default Card;
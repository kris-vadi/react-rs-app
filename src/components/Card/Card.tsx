import { Component } from 'react';
import styles from './Card.module.scss';
import { CardParams } from '../../types/types';

interface CardProps {
  itemData: CardParams;
}

class Card extends Component<CardProps> {
  render() {
    const { name, diameter, climate, terrain, population } =
      this.props.itemData;

    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.subtitle}>
          diameter: <span className={styles.description}>{diameter}</span>
        </div>
        <div className={styles.subtitle}>
          climate: <span className={styles.description}>{climate}</span>
        </div>
        <div className={styles.subtitle}>
          terrain: <span className={styles.description}>{terrain}</span>
        </div>
        <div className={styles.subtitle}>
          population: <span className={styles.description}>{population}</span>
        </div>
      </div>
    );
  }
}

export default Card;

import styles from './Card.module.scss';
import { CardProps } from '../../types/types';

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{props.itemData.name}</h2>
      <div className={styles.subtitle}>
        diameter:{' '}
        <span className={styles.description}>{props.itemData.diameter}</span>
      </div>
      <div className={styles.subtitle}>
        climate:{' '}
        <span className={styles.description}>{props.itemData.climate}</span>
      </div>
      <div className={styles.subtitle}>
        terrain:{' '}
        <span className={styles.description}>{props.itemData.terrain}</span>
      </div>
      <div className={styles.subtitle}>
        population:{' '}
        <span className={styles.description}>{props.itemData.population}</span>
      </div>
    </div>
  );
};

export default Card;

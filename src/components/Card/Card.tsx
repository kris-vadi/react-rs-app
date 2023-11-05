import styles from './Card.module.scss';
import { CardProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { getPlanetId } from '../../utils/utils';

const Card = (props: CardProps) => {
  const id: string = getPlanetId(props.itemData.url);
  const newQuery = `page=${props.query}&details=${id}`;

  return (
    <Link to={newQuery} className={styles.card}>
      <h2 className={styles.title}>{props.itemData.name}</h2>
      <div className={styles.subtitle}>
        diameter:
        <span className={styles.description}>{props.itemData.diameter}</span>
      </div>
      <div className={styles.subtitle}>
        climate:
        <span className={styles.description}>{props.itemData.climate}</span>
      </div>
      <div className={styles.subtitle}>
        terrain:
        <span className={styles.description}>{props.itemData.terrain}</span>
      </div>
    </Link>
  );
};

export default Card;

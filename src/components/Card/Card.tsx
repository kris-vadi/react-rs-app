import styles from './Card.module.scss';
import { CardProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { getPlanetId } from '../../utils/utils';
import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';

const Card = (props: CardProps) => {
  const id: string = getPlanetId(props.itemData.url);
  const newQuery = `page=${props.query}&details=${id}`;

  return (
    <Link to={newQuery} className={styles.card}>
      <h2 className={styles.title}>{props.itemData.name}</h2>
      <ItemInfoLine text="diameter" description={props.itemData.diameter} />
      <ItemInfoLine text="climate" description={props.itemData.climate} />
      <ItemInfoLine text="terrain" description={props.itemData.terrain} />
    </Link>
  );
};

export default Card;

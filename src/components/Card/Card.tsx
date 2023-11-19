import styles from './Card.module.scss';
import { CardProps } from './CardProps';
import { Link } from 'react-router-dom';
import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';

const Card = (props: CardProps): JSX.Element => {
  return (
    <Link
      to={`details/${props.itemData.id}`}
      className={styles.card}
      data-testid="card"
    >
      <h2 className={styles.title}>{props.itemData.attributes.name}</h2>
      <ItemInfoLine
        text="gender"
        description={props.itemData.attributes.gender}
      />
      <ItemInfoLine
        text="nationality"
        description={props.itemData.attributes.nationality}
      />
      <ItemInfoLine
        text="species"
        description={props.itemData.attributes.species}
      />
    </Link>
  );
};

export default Card;

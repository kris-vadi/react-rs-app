import { ItemInfoLineProps } from './ItemInfoLineProps';
import styles from './ItemInfoLine.module.scss';

const ItemInfoLine = (props: ItemInfoLineProps) => {
  return (
    props.description && (
      <div className={styles.subtitle}>
        <span className={styles.description}>{props.text}:</span>
        {props.description}
      </div>
    )
  );
};

export default ItemInfoLine;

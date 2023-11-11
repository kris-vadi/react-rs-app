import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams, CardsListProps } from '../../types/types';
import Loader from '../UI/Loader/Loader';

const CardsList = (props: CardsListProps) => {
  function renderContent() {
    if (props.isLoading) {
      return <Loader />;
    }

    if (props.cards && props.cards.length > 0) {
      return props.cards.map((card: CardParams, index: number) => (
        <Card key={`${card.attributes.name}${index}`} itemData={card} />
      ));
    }

    return <p>{'Sorry, no items match your search...'}</p>;
  }

  return (
    <>
      <div className={styles.list}>{renderContent()}</div>
    </>
  );
};

export default CardsList;

import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';
import Loader from '../UI/Loader/Loader';
import { ResponseDataContext } from '../ContextProvider/ResponseDataContext';
import { useContext } from 'react';

const CardsList = () => {
  const { isLoading, responseData } = useContext(ResponseDataContext);
  const cards: CardParams[] | undefined = responseData?.data;

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    if (cards && cards.length > 0) {
      return cards.map((card: CardParams, index: number) => (
        <Card key={`${card.attributes.name}${index}`} itemData={card} />
      ));
    }

    return <p>{'Sorry, no items match your search...'}</p>;
  }

  return (
    <>
      <div className={styles.list} data-testid="list">
        {renderContent()}
      </div>
    </>
  );
};

export default CardsList;

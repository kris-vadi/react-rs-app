import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { charactersApi } from '../../services/charactersApi';

const CardsList = () => {
  const query = useSelector((state: RootState) => state.query);
  const { data } = charactersApi.useGetCardsQuery(query);
  const cards: CardParams[] | undefined = data?.data;
  // const { isLoading, responseData } = useContext(ResponseDataContext);

  //const cards: CardParams[] | undefined = responseData?.data;

  function renderContent(): JSX.Element | JSX.Element[] {
    // if (isLoading) {
    //   return <Loader />;
    // }

    if (cards && cards.length > 0) {
      return cards.map((card: CardParams, index: number) => (
        <Card key={`${card.attributes.name}${index}`} itemData={card} />
      ));
    }

    return <p>Sorry, no items match your search...</p>;
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

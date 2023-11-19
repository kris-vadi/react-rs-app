import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { CardParams } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { charactersApi } from '../../services/charactersApi';
import { cardsLoader } from '../../store/slises/loadersSlice';
import Loader from '../UI/Loader/Loader';

const CardsList = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query);
  const { setCardsLoader } = cardsLoader.actions;

  const { data, isLoading, error } = charactersApi.useGetCardsQuery(query);
  dispatch(setCardsLoader(isLoading));

  const renderContent = (): JSX.Element | JSX.Element[] => {
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <p>The server returned an error...</p>;
    }

    if (data && data.data.length > 0) {
      return data.data.map((card: CardParams, index: number) => (
        <Card key={`${card.attributes.name}${index}`} itemData={card} />
      ));
    }

    return <p>Sorry, no items match your search...</p>;
  };

  return (
    <>
      <div className={styles.list} data-testid="list">
        {renderContent()}
      </div>
    </>
  );
};

export default CardsList;

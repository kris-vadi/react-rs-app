import { useEffect, useState } from 'react';
import styles from './CardInfo.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardParams } from '../../types/types';
import getCardInfo from '../../API/getCardInfo';
import Loader from '../UI/Loader/Loader';
import CloseButton from '../UI/CloseButton/CloseButton';
import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';
import { getCardId } from '../../utils/utils';

const CardInfo = () => {
  const [responseData, setResponseData] = useState<CardParams>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  async function getSearchResult(id: string) {
    setIsLoading(true);

    const currentResponseData: CardParams | undefined = await getCardInfo(id);

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    const id: string | undefined = getCardId(location.pathname);

    if (id) {
      getSearchResult(id);
    } else {
      navigate('/not-found');
    }
  }, [location.pathname, navigate]);

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <CloseButton callback={goBack} />
        {responseData?.attributes.image && (
          <img
            src={responseData?.attributes.image}
            alt={responseData?.attributes.slug}
            className={styles.image}
          />
        )}
        <h1 className={styles.title}>{responseData?.attributes.name}</h1>
        <ItemInfoLine
          text="gender"
          description={responseData?.attributes.gender}
        />
        <ItemInfoLine
          text="blud status"
          description={responseData?.attributes.blood_status}
        />
        <ItemInfoLine
          text="nationality"
          description={responseData?.attributes.nationality}
        />
        <ItemInfoLine
          text="species"
          description={responseData?.attributes.species}
        />
      </>
    );
  }

  return (
    <>
      <section className={styles.details} data-testid="details">
        {renderContent()}
      </section>
      <section className={styles.dimming} onClick={goBack}></section>
    </>
  );
};

export default CardInfo;

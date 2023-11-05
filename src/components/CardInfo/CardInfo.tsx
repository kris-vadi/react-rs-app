import { useEffect, useState } from 'react';
import styles from './CardInfo.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardParams } from '../../types/types';
import getCardInfo from '../../API/GetCardInfo';
import Loader from '../UI/Loader/Loader';

const CardInfo = () => {
  const [responseData, setResponseData] = useState<CardParams>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  async function getSearchResult() {
    setIsLoading(true);

    const currentResponseData: CardParams | undefined = await getCardInfo(
      location.pathname.slice(-1)
    );

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getSearchResult();
    console.log(isLoading);
  }, []);

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <h1 className={styles.title}>{responseData?.name}</h1>
        <div className={styles.subtitle}>
          diameter:
          <span className={styles.description}>{responseData?.diameter}</span>
        </div>
        <div className={styles.subtitle}>
          climate:
          <span className={styles.description}>{responseData?.climate}</span>
        </div>
        <div className={styles.subtitle}>
          terrain:
          <span className={styles.description}>{responseData?.terrain}</span>
        </div>
        <div className={styles.subtitle}>
          surface water:
          <span className={styles.description}>
            {responseData?.surface_water}
          </span>
        </div>
        <div className={styles.subtitle}>
          population:
          <span className={styles.description}>{responseData?.population}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <section className={styles.details}>{renderContent()}</section>
      <section className={styles.dimming} onClick={goBack}></section>
    </>
  );
};

export default CardInfo;

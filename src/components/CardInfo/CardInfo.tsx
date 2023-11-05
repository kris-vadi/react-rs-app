import { useEffect, useState } from 'react';
import styles from './CardInfo.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardParams } from '../../types/types';
import getCardInfo from '../../API/GetCardInfo';
import Loader from '../UI/Loader/Loader';
import CloseButton from '../UI/CloseButton/CloseButton';
import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';

const CardInfo = () => {
  const [responseData, setResponseData] = useState<CardParams>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  async function getSearchResult() {
    const currentResponseData: CardParams | undefined = await getCardInfo(
      location.pathname.slice(-1)
    );

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getSearchResult();
    setIsLoading(false);
  }, []);

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <CloseButton callback={goBack} />
        <h1 className={styles.title}>{responseData?.name}</h1>
        <ItemInfoLine text="diameter" description={responseData?.diameter} />
        <ItemInfoLine text="climate" description={responseData?.climate} />
        <ItemInfoLine text="terrain" description={responseData?.terrain} />
        <ItemInfoLine
          text="surface water"
          description={responseData?.surface_water}
        />
        <ItemInfoLine
          text="population"
          description={responseData?.population}
        />
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

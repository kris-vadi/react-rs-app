import styles from './CardInfo.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardParams } from '../../types/types';
import CloseButton from '../UI/CloseButton/CloseButton';
import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';
import { getCardId } from '../../utils/utils';
import { charactersApi } from '../../services/charactersApi';

const CardInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const id: string | undefined = getCardId(location.pathname);
  let responseData: CardParams | undefined;

  if (id) {
    const { data } = charactersApi.useGetCardInfoQuery(id);
    responseData = data?.data;
  }

  // function getSearchResult(id: string) {
  //   // setIsLoading(true);

  //   const { data } = charactersApi.useGetCardInfoQuery(id);
  //   console.log(data);
  //   responseData = data?.data;

  //   // setIsLoading(false);
  // }

  // useEffect(() => {
  //   const id: string | undefined = getCardId(location.pathname);
  //   console.log(id);

  //   if (id) {
  //     getSearchResult(id);
  //   } else {
  //     navigate('/not-found');
  //   }
  // }, [location.pathname, navigate]);

  function renderContent() {
    // if (isLoading) {
    //   return <Loader />;
    // }

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

import { useSelector } from 'react-redux';
import Details from '../Details/Details';
import CloseButton from '../UI/CloseButton/CloseButton';
import styles from './CardInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import Loader from '../UI/Loader/Loader';

const CardInfo = (): JSX.Element => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const isDetailsLoading = useSelector(
    (state: RootState) => state.detailsLoader
  );

  return (
    <>
      <section className={styles.details} data-testid="details">
        <CloseButton callback={goBack} />
        <Details />
        {isDetailsLoading.value && <Loader />}
      </section>
      <section className={styles.dimming} onClick={goBack}></section>
    </>
  );
};

export default CardInfo;

import ItemInfoLine from '../UI/ItemInfoLine/ItemInfoLine';
import { getCardId } from '../../utils/utils';
import { charactersApi } from '../../services/charactersApi';
import { detailsLoader } from '../../store/slises/loadersSlice';
import styles from './Details.module.scss';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Details = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { setDetailsLoader } = detailsLoader.actions;

  const id: string = getCardId(location.pathname);

  const { data, isLoading, error } = charactersApi.useGetCardInfoQuery(id);

  useEffect(() => {
    dispatch(setDetailsLoader(isLoading));
  }, [isLoading]);

  if (error) {
    return <p>The server returned an error...</p>;
  }

  return (
    <>
      {data?.data.attributes.image && (
        <img
          src={data?.data.attributes.image}
          alt={data?.data.attributes.slug}
          className={styles.image}
        />
      )}
      <h1 className={styles.title}>{data?.data.attributes.name}</h1>
      <ItemInfoLine text="gender" description={data?.data.attributes.gender} />
      <ItemInfoLine
        text="blud status"
        description={data?.data.attributes.blood_status}
      />
      <ItemInfoLine
        text="nationality"
        description={data?.data.attributes.nationality}
      />
      <ItemInfoLine
        text="species"
        description={data?.data.attributes.species}
      />
    </>
  );
};

export default Details;

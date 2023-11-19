import { Outlet } from 'react-router-dom';
import styles from './MainContent.module.scss';
import Pagination from '../Pagination/Pagination';
import CardsList from '../CardsList/CardsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainContent = () => {
  const isCardsLoading = useSelector((state: RootState) => state.cardsLoader);
  console.log(isCardsLoading.value);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <CardsList />
        {!isCardsLoading.value && <Pagination />}
      </section>
      <Outlet />
    </main>
  );
};

export default MainContent;

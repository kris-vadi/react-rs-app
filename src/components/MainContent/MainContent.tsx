import { Outlet } from 'react-router-dom';
import styles from './MainContent.module.scss';
import Pagination from '../Pagination/Pagination';
import CardsList from '../CardsList/CardsList';
import { useContext } from 'react';
import { ResponseDataContext } from '../ContextProvider/ResponseDataContext';

const MainContent = () => {
  const { isLoading } = useContext(ResponseDataContext);

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <CardsList />
        {!isLoading && <Pagination />}
      </section>
      <Outlet />
    </main>
  );
};

export default MainContent;

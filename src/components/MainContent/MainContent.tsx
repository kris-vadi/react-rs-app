import { Outlet } from 'react-router-dom';
import styles from './MainContent.module.scss';
import Pagination from '../Pagination/Pagination';
import { MainContentProps } from './MainContentProps';
import CardsList from '../CardsList/CardsList';

const MainContent = (props: MainContentProps) => {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <CardsList
          cards={props.responseData?.data}
          isLoading={props.isLoading}
        />
        {!props.isLoading && (
          <Pagination
            setSearchData={props.setSearchData}
            searchData={props.searchData}
            responseData={props.responseData}
          />
        )}
      </section>
      <Outlet />
    </main>
  );
};

export default MainContent;

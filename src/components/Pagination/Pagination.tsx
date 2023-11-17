import styles from './Pagination.module.scss';
import { useContext } from 'react';
import { DataContext } from '../ContextProvider/DataContext';
import { ResponseDataContext } from '../ContextProvider/ResponseDataContext';

const Pagination = () => {
  const { searchData, setSearchData } = useContext(DataContext);
  const { responseData } = useContext(ResponseDataContext);

  function handlePrevButton(): void {
    setSearchData({
      searchInputValue: searchData.searchInputValue,
      pageLimit: searchData.pageLimit,
      page: searchData.page - 1,
    });
  }

  function handleNextButton(): void {
    setSearchData({
      searchInputValue: searchData.searchInputValue,
      pageLimit: searchData.pageLimit,
      page: searchData.page + 1,
    });
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevButton}
        disabled={responseData?.meta.pagination.current === 1}
      ></button>
      <div className={styles.pageNumber}>{searchData.page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={responseData?.meta.pagination.last === undefined}
      ></button>
    </div>
  );
};

export default Pagination;

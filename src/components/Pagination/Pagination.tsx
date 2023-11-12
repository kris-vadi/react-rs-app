import { PaginationProps } from './PaginationProps';
import styles from './Pagination.module.scss';
import { useContext } from 'react';
import { DataContext } from '../../pages/Main/MainPage';

const Pagination = (props: PaginationProps) => {
  const { searchData, setSearchData } = useContext(DataContext);

  function handlePrevButton() {
    setSearchData({
      searchInputValue: searchData.searchInputValue,
      pageLimit: searchData.pageLimit,
      page: searchData.page - 1,
    });
  }

  function handleNextButton() {
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
        disabled={props.responseData?.meta.pagination.current === 1}
      ></button>
      <div className={styles.pageNumber}>{searchData.page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={props.responseData?.meta.pagination.last === undefined}
      ></button>
    </div>
  );
};

export default Pagination;

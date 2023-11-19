import styles from './Pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.query);
  const { setPage } = querySlice.actions;
  const paginationData = useSelector(
    (state: RootState) => state.paginationData
  );

  const handlePrevButton = (): void => {
    dispatch(setPage(page - 1));
  };

  const handleNextButton = (): void => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevButton}
        disabled={page === 1}
      ></button>
      <div className={styles.pageNumber}>{page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={paginationData.value.next === undefined}
        data-testid="next"
      ></button>
    </div>
  );
};

export default Pagination;

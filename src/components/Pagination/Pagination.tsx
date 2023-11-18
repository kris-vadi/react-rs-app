import styles from './Pagination.module.scss';
import { useContext } from 'react';
import { ResponseDataContext } from '../ContextProvider/ResponseDataContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.query);
  const { setPage } = querySlice.actions;

  const { responseData } = useContext(ResponseDataContext);

  function handlePrevButton(): void {
    dispatch(setPage(page - 1));
  }

  function handleNextButton(): void {
    dispatch(setPage(page + 1));
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevButton}
        disabled={responseData?.meta.pagination.current === 1}
      ></button>
      <div className={styles.pageNumber}>{page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={responseData?.meta.pagination.last === undefined}
        data-testid="next"
      ></button>
    </div>
  );
};

export default Pagination;

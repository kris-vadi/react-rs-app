import { PaginationProps } from '../../types/types';
import styles from './Pagination.module.scss';

const Pagination = (props: PaginationProps) => {
  function handlePrevButton() {
    props.onPage(props.page - 1);
  }

  function handleNextButton() {
    props.onPage(props.page + 1);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevButton}
        disabled={props.responseData?.meta.pagination.current === 1}
      ></button>
      <div className={styles.pageNumber}>{props.page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={props.responseData?.meta.pagination.last === undefined}
      ></button>
    </div>
  );
};

export default Pagination;

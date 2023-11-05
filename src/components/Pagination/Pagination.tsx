import { PaginationProps } from '../../types/types';
import styles from './Pagination.module.scss';

const Pagination = (props: PaginationProps) => {
  function handlePrevButton() {
    if (props.responseData?.previous) {
      props.onPage(props.page - 1);
    }
  }

  function handleNextButton() {
    if (props.responseData?.next) {
      props.onPage(props.page + 1);
    }
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevButton}
        onClick={handlePrevButton}
        disabled={props.responseData?.previous === 'null'}
      ></button>
      <div className={styles.pageNumber}>{props.page}</div>
      <button
        className={styles.nextButton}
        onClick={handleNextButton}
        disabled={props.responseData?.next === 'null'}
      ></button>
    </div>
  );
};

export default Pagination;

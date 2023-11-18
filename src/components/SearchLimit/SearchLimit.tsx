import styles from './SearchLimit.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const SearchLimit = () => {
  const dispatch = useDispatch();
  const { pageLimit } = useSelector((state: RootState) => state.query);
  const { setPageLimit } = querySlice.actions;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setPageLimit(event.target.value));
    localStorage.setItem('page-limit', event.target.value);
  }

  return (
    <select
      className={styles.select}
      value={pageLimit}
      onChange={handleChange}
      data-testid="select"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default SearchLimit;

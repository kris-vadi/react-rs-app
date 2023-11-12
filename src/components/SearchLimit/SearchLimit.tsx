import { BaseSyntheticEvent, useContext } from 'react';
import styles from './SearchLimit.module.scss';
import { DataContext } from '../../pages/Main/MainPage';

const SearchLimit = () => {
  const { searchData, setSearchData } = useContext(DataContext);

  function handleChange(event: BaseSyntheticEvent) {
    setSearchData({
      searchInputValue: searchData.searchInputValue,
      pageLimit: event.target.value,
      page: 1,
    });
    localStorage.setItem('page-limit', event.target.value);
  }

  return (
    <select
      className={styles.select}
      value={searchData.pageLimit}
      onChange={handleChange}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default SearchLimit;

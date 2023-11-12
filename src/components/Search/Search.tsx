import { useContext } from 'react';
import { DataContext } from '../../pages/Main/MainPage';
import styles from './Search.module.scss';

const Search = () => {
  const { searchData, setSearchData } = useContext(DataContext);

  function setNewValue(newValue: string) {
    setSearchData({
      searchInputValue: newValue,
      pageLimit: searchData.pageLimit,
      page: 1,
    });
  }

  function handleInputChange(event: React.BaseSyntheticEvent) {
    localStorage.setItem('search-input', event.target.value.trim());
    setNewValue(event.target.value.trim());
  }

  function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();
    setNewValue(event.target.value.trim());
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={searchData.searchInputValue?.toString()}
        onChange={handleInputChange}
      ></input>
      <button className={styles.submit}></button>
    </form>
  );
};

export default Search;

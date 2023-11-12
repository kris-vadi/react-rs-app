import styles from './Search.module.scss';
import { SearchProps } from './SearchProps';

const Search = (props: SearchProps) => {
  function setNewValue(newValue: string) {
    props.setSearchData({
      searchInputValue: newValue,
      pageLimit: props.searchData.pageLimit,
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
        value={props.searchData.searchInputValue?.toString()}
        onChange={handleInputChange}
      ></input>
      <button className={styles.submit}></button>
    </form>
  );
};

export default Search;

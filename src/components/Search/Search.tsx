import React from 'react';
import { useContext } from 'react';
import styles from './Search.module.scss';
import { DataContext } from '../ContextProvider/DataContext';
import { JSX } from 'react/jsx-runtime';

const Search = (): JSX.Element => {
  const { searchData, setSearchData } = useContext(DataContext);

  function setNewValue(newValue: string) {
    setSearchData({
      searchInputValue: newValue,
      pageLimit: searchData.pageLimit,
      page: 1,
    });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewValue(event.target.value);
    localStorage.setItem('search-input', event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setNewValue((event.target as HTMLInputElement).value);
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
      <button className={styles.submit} aria-label="submit"></button>
    </form>
  );
};

export default Search;

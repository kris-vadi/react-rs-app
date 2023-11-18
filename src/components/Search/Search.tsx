import React from 'react';
import styles from './Search.module.scss';
import { JSX } from 'react/jsx-runtime';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const Search = (): JSX.Element => {
  const { searchInputValue } = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();
  const { setSearchValue } = querySlice.actions;

  function setNewValue(newValue: string) {
    dispatch(setSearchValue(newValue));
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
        value={searchInputValue?.toString()}
        onChange={handleInputChange}
      ></input>
      <button className={styles.submit} aria-label="submit"></button>
    </form>
  );
};

export default Search;

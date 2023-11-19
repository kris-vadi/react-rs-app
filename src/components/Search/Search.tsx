import React, { useState } from 'react';
import styles from './Search.module.scss';
import { JSX } from 'react/jsx-runtime';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const { searchInputValue } = useSelector((state: RootState) => state.query);
  const { setSearchValue } = querySlice.actions;

  const inputValueMemorized: string | null =
    localStorage.getItem('search-input');
  const [currentValue, setCurrentValue] = useState(
    inputValueMemorized ? inputValueMemorized : searchInputValue
  );

  const setNewValue = (newValue: string) => {
    dispatch(setSearchValue(newValue));
  };

  const handleSearch = () => {
    localStorage.setItem('search-input', currentValue);
    setNewValue(currentValue);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = event.target.value.trim();
    setCurrentValue(newValue);
    localStorage.setItem('search-input', newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={currentValue}
        onChange={handleInputChange}
      ></input>
      <button
        className={styles.submit}
        aria-label="submit"
        onChange={handleSearch}
      ></button>
    </form>
  );
};

export default Search;

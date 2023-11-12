import React, { useState } from 'react';
import styles from './Search.module.scss';
import { SearchProps } from '../../types/types';

const Search = (props: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>(
    props.inputInitialValue ? props.inputInitialValue : ''
  );

  function handleInputChange(event: React.BaseSyntheticEvent) {
    event.preventDefault();
    setInputValue(event.target.value.trim());
    localStorage.setItem('search-input', event.target.value.trim());
  }

  function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();
    props.onSearch(inputValue);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button className={styles.submit}></button>
    </form>
  );
};

export default Search;

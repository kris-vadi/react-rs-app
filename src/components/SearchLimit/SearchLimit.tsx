import { BaseSyntheticEvent, useState } from 'react';
import styles from './SearchLimit.module.scss';

interface SearchLimitProps {
  onChangeLimit: (value: string) => void;
  value: string | null;
}

const SearchLimit = (props: SearchLimitProps) => {
  const [value, setValue] = useState<string>(props.value ? props.value : '10');

  function handleChange(event: BaseSyntheticEvent) {
    props.onChangeLimit(event.target.value);
    setValue(event.target.value);
    localStorage.setItem('page-limit', event.target.value);
  }

  return (
    <select className={styles.select} value={value} onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default SearchLimit;

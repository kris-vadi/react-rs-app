import styles from './Header.module.scss';
import Search from '../Search/Search';
import ErrorButton from '../Error/ErrorButton';
import { SearchProps } from '../../types/types';

const Header = (props: SearchProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <Search onSearch={props.onSearch} />
      <ErrorButton />
    </header>
  );
};

export default Header;

import ErrorButton from '../Error/ErrorButton';
import Search from '../Search/Search';
import SearchLimit from '../SearchLimit/SearchLimit';
import Logo from '../UI/Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <SearchLimit />
      <ErrorButton />
    </header>
  );
};

export default Header;

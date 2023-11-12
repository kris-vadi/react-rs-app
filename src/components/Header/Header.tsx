import ErrorButton from '../Error/ErrorButton';
import Search from '../Search/Search';
import SearchLimit from '../SearchLimit/SearchLimit';
import Logo from '../UI/Logo/Logo';
import styles from './Header.module.scss';
import { HeaderProps } from './HeaderProps';

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search
        setSearchData={props.setSearchData}
        searchData={props.searchData}
      />
      <SearchLimit
        setSearchData={props.setSearchData}
        searchData={props.searchData}
      />
      <ErrorButton />
    </header>
  );
};

export default Header;

import { Component } from 'react';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import ErrorButton from '../Error/ErrorButton';

interface HeaderProps {
  onSearch: (newValue: string) => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <Search onSearch={this.props.onSearch} />
        <ErrorButton />
      </header>
    );
  }
}

export default Header;

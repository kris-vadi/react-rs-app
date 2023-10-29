import { Component } from 'react';
import styles from './Header.module.scss'
import Search from '../Search/Search';

class Header extends Component {
  render() {

    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <Search />
      </header>
    );
  }
}

export default Header;
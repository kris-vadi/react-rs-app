import { Component } from 'react';
import styles from './Header.module.scss';
import Search from '../Search/Search';

interface HeaderProps {
  onSearch: (newValue: string) => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}

export default Header;

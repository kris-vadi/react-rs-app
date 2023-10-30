import React, { Component } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  onSearch: (value: string) => void;
}

interface SearchState {
  inputValue: string;
}

export class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    inputValue: '',
  };

  handleInputChange = (event: React.BaseSyntheticEvent) => {
    event.preventDefault;
    this.setState({
      inputValue: event.target.value,
    });
    localStorage.setItem('search-input', event.target.value.trim());
  };

  handleSearch = () => {
    this.props.onSearch(this.state.inputValue.trim());
  };

  componentDidMount() {
    const currentValue = localStorage.getItem('search-input');
    this.setState({ inputValue: currentValue || '' });
  }

  render() {
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button className={styles.submit} onClick={this.handleSearch}></button>
      </form>
    );
  }
}

export default Search;

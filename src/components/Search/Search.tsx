import  {Component} from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  onSearch: (value: string) => void;
}

interface SearchState {
  inputValue: string;
}

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { inputValue: '' };
  }
  
  render() {
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          //value=...
          onChange={(event) => console.log(event)}
        ></input>
        <button
          className={styles.submit}
          //onClick=...
        >
        </button>
      </form>
    );
  }
}

export default Search;
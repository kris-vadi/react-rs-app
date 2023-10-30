import { Component, Fragment } from 'react';
import styles from './HomePage.module.scss';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import { CardParams, ResponseParams } from '../../types/types';

type HomePageProps = Record<string, never>;

interface HomePageState {
  cards: CardParams[];
  searchInput: string | '';
  isLoading: boolean;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      cards: [],
      searchInput: '',
      isLoading: false,
    };
  }

  getSearchResult = async () => {
    this.setState({
      isLoading: true,
    });

    await this.fetchCards(this.state.searchInput);
    console.log(this.state.searchInput);
  };

  fetchCards = async (searchText?: string | '') => {
    let url = `https://swapi.dev/api/planets/`;

    if (searchText && searchText.trim() !== '') {
      url += `?search=${searchText}`;
    }

    await fetch(url)
      .then((response) => response.json())
      .then((response: ResponseParams) => {
        const currentCards: CardParams[] = response.results;
        this.setState({ cards: currentCards });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  handleSearch = (newValue: string) => {
    this.setState({
      searchInput: newValue,
    });
  };

  componentDidMount() {
    const currentSearchValue = localStorage.getItem('search-input');
    this.setState({ searchInput: currentSearchValue || '' });
  }

  componentDidUpdate(
    prevProps: Readonly<HomePageProps>,
    prevState: Readonly<HomePageState>
  ): void {
    if (
      this.state.searchInput !== prevState.searchInput &&
      this.state.searchInput !== ''
    ) {
      this.getSearchResult();
    }
  }

  render() {
    return (
      <Fragment>
        <Header onSearch={this.handleSearch} />
        <main className={styles.main}>
          <CardsList
            cards={this.state.cards}
            isLoading={this.state.isLoading}
          />
        </main>
      </Fragment>
    );
  }
}

export default HomePage;

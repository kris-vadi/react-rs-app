import { Component, Fragment } from 'react';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import { CardParams } from '../../types/types';

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
  };

  fetchCards = (searchText?: string | '') => {
    let url = `https://swapi.dev/api/planets`;

    fetch(url)
      .then((response) => response.json())
      .then((cards: CardParams[]) => {
        console.log(cards);
        this.setState({ cards: [] });
        console.log(this.state);
        this.setState({ isLoading: false });
        console.log(this.state);
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

  render() {
    return (
      <Fragment>
        <Header onSearch={this.handleSearch} />
        <main className="main">
          <CardsList cards={this.state.cards} />
        </main>
      </Fragment>
    );
  }
}

export default HomePage;

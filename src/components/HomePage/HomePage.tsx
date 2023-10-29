import { Component, Fragment } from 'react';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import { CardParams } from '../../types/types';

type HomePageProps = Record<string, never>;

interface HomePageState {
  cards: CardParams[];
  searchInput: string | null;
  isLoading: boolean;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      cards: [],
      searchInput: null,
      isLoading: false,
    };
  }

  fetchCards = (searchText?: string) => {
    let url = `https://swapi.dev/api/planets/${searchText}`;

    fetch(url)
      .then((response) => response.json())
      .then((cards: CardParams[]) => {
        console.log(cards);
        this.setState({ cards: [] });
      })
      .catch(() => {});
  };

  handleSearch = (newValue: string) => {
    this.setState({
      ...this.state,
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

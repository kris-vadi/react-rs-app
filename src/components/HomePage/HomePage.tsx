import { Component, Fragment } from 'react';
import styles from './HomePage.module.scss';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import { CardParams } from '../../types/types';
import getCards from '../../API/Api';

type HomePageProps = Record<string, never>;

interface HomePageState {
  cards: CardParams[];
  searchInput: string | null;
  isCardsLoading: boolean;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      cards: [],
      searchInput: null,
      isCardsLoading: false,
    };
  }

  getSearchResult = async () => {
    this.setState({ isCardsLoading: true });

    const currentCards: CardParams[] | undefined = await getCards(
      this.state.searchInput
    );
    if (currentCards) {
      this.setState({ cards: currentCards });
    }

    this.setState({ isCardsLoading: false });
  };

  handleSearch = (newValue: string) => {
    this.setState({
      searchInput: newValue,
    });
  };

  componentDidMount() {
    const currentSearchValue: string | null =
      localStorage.getItem('search-input');
    this.setState({ searchInput: currentSearchValue || '' });
  }

  componentDidUpdate(
    prevProps: Readonly<HomePageProps>,
    prevState: Readonly<HomePageState>
  ): void {
    if (this.state.searchInput !== prevState.searchInput) {
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
            isLoading={this.state.isCardsLoading}
          />
        </main>
      </Fragment>
    );
  }
}

export default HomePage;

import { Component, Fragment } from 'react';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import { CardParams } from '../../types/types';

type HomePageProps = Record<string, never>;

interface HomePageState {
  cards: CardParams[];
}

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      cards: [],
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

  fetch = this.fetchCards('');

  render() {
    return (
      <Fragment>
        <Header />
        <main className="main">
          <CardsList cards={this.state.cards} />
        </main>
      </Fragment>
    );
  }
}

export default HomePage;

import { useEffect, useState } from 'react';
import { ResponseData, SearchParams } from '../../types/types';
import getCards from '../../API/Api';
import Header from '../Header/Header';
import CardsList from '../CardsList/CardsList';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchInputValue: localStorage.getItem('search-input'),
    page: 1,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [responseData, setResponseData] = useState<ResponseData>();

  async function getSearchResult() {
    setIsLoading(true);

    const currentResponseData: ResponseData | undefined = await getCards(
      searchParams.searchInputValue,
      searchParams.page
    );

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }

    setIsLoading(false);
  }

  function handleSearch(newValue: string) {
    setSearchParams({ searchInputValue: newValue, page: 1 });
  }

  useEffect(() => {
    getSearchResult();
  }, [searchParams]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <main className={styles.main}>
        <CardsList cards={responseData?.results} isLoading={isLoading} />
      </main>
    </>
  );
};

export default HomePage;

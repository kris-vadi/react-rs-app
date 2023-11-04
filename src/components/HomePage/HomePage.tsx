import { useEffect, useState } from 'react';
import { ResponseData, SearchParams } from '../../types/types';
import getCards from '../../API/Api';
import CardsList from '../CardsList/CardsList';
import styles from './HomePage.module.scss';
import Search from '../Search/Search';
import ErrorButton from '../Error/ErrorButton';
import Logo from '../UI/Logo/Logo';
import Pagination from '../Pagination/Pagination';

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

  function onPageChange(page: number) {
    setSearchParams({
      searchInputValue: searchParams.searchInputValue,
      page: page,
    });
  }

  useEffect(() => {
    getSearchResult();
  }, [searchParams.searchInputValue, searchParams.page]);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Search onSearch={handleSearch} />
        <ErrorButton />
      </header>
      <main className={styles.main}>
        <CardsList cards={responseData?.results} isLoading={isLoading} />
        <Pagination
          onPage={onPageChange}
          responseData={responseData}
          page={searchParams.page}
        />
      </main>
    </>
  );
};

export default HomePage;

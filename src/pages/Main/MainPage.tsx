import { useEffect, useState } from 'react';
import { ResponseData, SearchParams } from '../../types/types';
import getCards from '../../API/Api';
import CardsList from '../../components/CardsList/CardsList';
import styles from './MainPage.module.scss';
import Search from '../../components/Search/Search';
import ErrorButton from '../../components/Error/ErrorButton';
import Logo from '../../components/UI/Logo/Logo';
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchInputValue: localStorage.getItem('search-input')
      ? localStorage.getItem('search-input')
      : '',
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
        <Search
          onSearch={handleSearch}
          inputInitialValue={searchParams.searchInputValue}
        />
        <ErrorButton />
      </header>
      <main className={styles.main}>
        <CardsList cards={responseData?.results} isLoading={isLoading} />
        {!isLoading && (
          <Pagination
            onPage={onPageChange}
            responseData={responseData}
            page={searchParams.page}
          />
        )}
      </main>
    </>
  );
};

export default MainPage;

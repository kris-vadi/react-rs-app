import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { ResponseData, SearchData } from '../../types/types';
import styles from './MainPage.module.scss';
import getCards from '../../API/GetCards';
import CardsList from '../../components/CardsList/CardsList';
import Search from '../../components/Search/Search';
import ErrorButton from '../../components/Error/ErrorButton';
import Logo from '../../components/UI/Logo/Logo';
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    searchInputValue: localStorage.getItem('search-input')
      ? localStorage.getItem('search-input')
      : '',
    page: 1,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [responseData, setResponseData] = useState<ResponseData>();

  const query = searchParams.get('page') || '';

  async function getSearchResult() {
    setIsLoading(true);

    const currentResponseData: ResponseData | undefined = await getCards(
      searchData.searchInputValue,
      searchData.page
    );

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }

    setIsLoading(false);
  }

  function handleSearch(newValue: string) {
    setSearchData({ searchInputValue: newValue, page: 1 });
  }

  function onPageChange(page: number) {
    setSearchData({
      searchInputValue: searchData.searchInputValue,
      page: page,
    });
  }

  useEffect(() => {
    getSearchResult();
    setSearchParams({ page: searchData.page.toString() });
  }, [searchData.searchInputValue, searchData.page]);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Search
          onSearch={handleSearch}
          inputInitialValue={searchData.searchInputValue}
        />
        <ErrorButton />
      </header>
      <main className={styles.main}>
        <section className={styles.content}>
          <CardsList
            cards={responseData?.data}
            isLoading={isLoading}
            query={query}
          />
          {!isLoading && (
            <Pagination
              onPage={onPageChange}
              responseData={responseData}
              page={searchData.page}
            />
          )}
        </section>
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;

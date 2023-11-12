import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ResponseData, SearchData } from '../../types/types';
import styles from './MainPage.module.scss';
import getCards from '../../API/GetCards';
import CardsList from '../../components/CardsList/CardsList';
import Search from '../../components/Search/Search';
import ErrorButton from '../../components/Error/ErrorButton';
import Logo from '../../components/UI/Logo/Logo';
import Pagination from '../../components/Pagination/Pagination';
import SearchLimit from '../../components/SearchLimit/SearchLimit';

const MainPage = () => {
  // const [searchData, setSearchData] = useState<SearchData>({
  //   searchInputValue: localStorage.getItem('search-input')
  //     ? localStorage.getItem('search-input')
  //     : '',
  //   pageLimit: localStorage.getItem('page-limit')
  //     ? localStorage.getItem('page-limit')
  //     : '10',
  //   page: 1,
  // });

  const [searchData, setSearchData] = useState<SearchData>({
    searchInputValue: localStorage.getItem('search-input')
      ? localStorage.getItem('search-input')
      : '',
    pageLimit: '10',
    page: 1,
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [responseData, setResponseData] = useState<ResponseData>();

  async function getSearchResult() {
    setIsLoading(true);

    const currentResponseData: ResponseData | undefined = await getCards(
      searchData.searchInputValue,
      searchData.page,
      searchData.pageLimit
    );

    if (currentResponseData) {
      setResponseData(currentResponseData);
    }

    setIsLoading(false);
  }

  function handleSearch(newValue: string) {
    setSearchData({
      searchInputValue: newValue,
      pageLimit: searchData.pageLimit,
      page: 1,
    });
  }

  function updateURL() {
    navigate(`/page/${searchData.page}`);
  }

  useEffect(() => {
    getSearchResult();
    updateURL();
  }, [searchData.page, searchData.pageLimit, searchData.searchInputValue]);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <Search
          onSearch={handleSearch}
          inputInitialValue={searchData.searchInputValue}
        />
        <SearchLimit setSearchData={setSearchData} searchData={searchData} />
        <ErrorButton />
      </header>
      <main className={styles.main}>
        <section className={styles.content}>
          <CardsList cards={responseData?.data} isLoading={isLoading} />
          {!isLoading && (
            <Pagination
              setSearchData={setSearchData}
              searchData={searchData}
              responseData={responseData}
            />
          )}
        </section>
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;

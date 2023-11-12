import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseData, SearchData } from '../../types/types';
import getCards from '../../API/GetCards';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';

interface DataContextParams {
  searchData: SearchData;
  setSearchData: (searchData: SearchData) => void;
}

const initData: SearchData = {
  searchInputValue: '',
  pageLimit: '10',
  page: 1,
};

export const DataContext = createContext<DataContextParams>({
  searchData: initData,
  setSearchData: () => {},
});

const MainPage = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    searchInputValue: localStorage.getItem('search-input')
      ? localStorage.getItem('search-input')
      : '',
    pageLimit: localStorage.getItem('page-limit')
      ? localStorage.getItem('page-limit')?.toString()
      : '10',
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

  function updateURL() {
    navigate(`/page/${searchData.page}`);
  }

  useEffect(() => {
    getSearchResult();
    updateURL();
  }, [searchData.page, searchData.pageLimit, searchData.searchInputValue]);

  return (
    <DataContext.Provider value={{ searchData, setSearchData }}>
      <Header />
      <MainContent responseData={responseData} isLoading={isLoading} />
    </DataContext.Provider>
  );
};

export default MainPage;

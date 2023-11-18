import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseData, SearchData } from '../../types/types';
import getCards from '../../API/getCards';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';
import { DataContext } from '../../components/ContextProvider/DataContext';
import { ResponseDataContext } from '../../components/ContextProvider/ResponseDataContext';

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

  useEffect(() => {
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

    getSearchResult();

    navigate(`/page/${searchData.page}`);
  }, [searchData.page, searchData.pageLimit, searchData.searchInputValue]);

  return (
    <DataContext.Provider value={{ searchData, setSearchData }}>
      <ResponseDataContext.Provider value={{ responseData, isLoading }}>
        <Header />
        <MainContent />
      </ResponseDataContext.Provider>
    </DataContext.Provider>
  );
};

export default MainPage;

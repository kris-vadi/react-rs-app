import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseData, SearchData } from '../../types/types';
import getCards from '../../API/GetCards';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';

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
    <>
      <Header setSearchData={setSearchData} searchData={searchData} />
      <MainContent
        setSearchData={setSearchData}
        searchData={searchData}
        responseData={responseData}
        isLoading={isLoading}
      />
    </>
  );
};

export default MainPage;

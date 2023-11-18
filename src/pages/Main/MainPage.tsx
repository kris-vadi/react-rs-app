import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseData } from '../../types/types';
import getCards from '../../API/getCards';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';
import { ResponseDataContext } from '../../components/ContextProvider/ResponseDataContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const MainPage = () => {
  // const [searchData, setSearchData] = useState<SearchData>({
  //   searchInputValue: localStorage.getItem('search-input')
  //     ? localStorage.getItem('search-input')
  //     : '',
  //   pageLimit: localStorage.getItem('page-limit')
  //     ? localStorage.getItem('page-limit')?.toString()
  //     : '10',
  //   page: 1,
  // });
  const query = useSelector((state: RootState) => state.query);
  const { setSearchValue } = querySlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ResponseData>();

  useEffect(() => {
    const inputValueMemorized: string | null =
      localStorage.getItem('search-input');
    inputValueMemorized && dispatch(setSearchValue(inputValueMemorized));
  }, []);

  useEffect(() => {
    async function getSearchResult() {
      setIsLoading(true);

      const currentResponseData: ResponseData | undefined = await getCards(
        query.searchInputValue,
        query.page,
        query.pageLimit
      );

      if (currentResponseData) {
        setResponseData(currentResponseData);
      }

      setIsLoading(false);
    }

    getSearchResult();

    navigate(`/page/${query.page}`);
  }, [query]);

  return (
    <ResponseDataContext.Provider value={{ responseData, isLoading }}>
      <Header />
      <MainContent />
    </ResponseDataContext.Provider>
  );
};

export default MainPage;

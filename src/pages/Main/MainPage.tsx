import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponseData } from '../../types/types';
import getCards from '../../API/getCards';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';
import { ResponseDataContext } from '../../components/ContextProvider/ResponseDataContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainPage = () => {
  const query = useSelector((state: RootState) => state.query);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [responseData, setResponseData] = useState<ResponseData>();

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

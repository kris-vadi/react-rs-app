import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContent from '../../components/MainContent/MainContent';
import Header from '../../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { querySlice } from '../../store/slises/querySlise';

const MainPage = () => {
  const query = useSelector((state: RootState) => state.query);
  const { setSearchValue, setPageLimit } = querySlice.actions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [responseData, setResponseData] = useState<ResponseData>();

  useEffect(() => {
    const inputValueMemorized: string | null =
      localStorage.getItem('search-input');
    const pageLimitMemorized: string | null =
      localStorage.getItem('page-limit');
    inputValueMemorized && dispatch(setSearchValue(inputValueMemorized));
    pageLimitMemorized && dispatch(setPageLimit(pageLimitMemorized));
  }, []);

  useEffect(() => {
    navigate(`/page/${query.page}`);
  }, [query]);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default MainPage;

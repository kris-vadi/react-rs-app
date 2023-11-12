import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import './styles/app.scss';
import CardInfo from './components/CardInfo/CardInfo';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/page/:number" element={<MainPage />}>
          <Route path="/page/:number/details/:id" element={<CardInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

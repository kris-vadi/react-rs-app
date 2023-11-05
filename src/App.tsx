import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import './styles/app.scss';
import CardInfo from './components/CardInfo/CardInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/:query" element={<CardInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

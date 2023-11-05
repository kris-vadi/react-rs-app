import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import './styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

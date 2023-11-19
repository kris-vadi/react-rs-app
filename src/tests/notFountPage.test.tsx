import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it } from 'vitest';
import MainPage from '../pages/Main/MainPage';
import { render, screen } from '@testing-library/react';
import CardInfo from '../components/CardInfo/CardInfo';
import NotFound from '../pages/NotFound/NotFound';

describe('Tests for 404 page component', () => {
  it('ensure that the 404 page is displayed when navigating to an invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/incorrect-route']}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/page/:number" element={<MainPage />}>
            <Route path="/page/:number/details/:id" element={<CardInfo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    const notFound = await screen.getByText('404 Page Not Found');
    expect(notFound).toBeInTheDocument();
  });
});

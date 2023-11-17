import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { ActorAttributes, CardParams } from '../types/types';
import Card from '../components/Card/Card';
import { MemoryRouter } from 'react-router';

const attributesData: ActorAttributes = {
  name: 'Harry James Potter',
  gender: 'Male',
  nationality: 'English',
  blood_status: 'Half-blood',
  species: 'Human',
};

const cardData: CardParams = {
  id: '42d8662b-24a2-434b-8394-945ff0daa194',
  attributes: attributesData,
};

describe('Tests for the Card component', () => {
  it('ensure that the card component renders the relevant card data', async () => {
    render(
      <MemoryRouter>
        <Card itemData={cardData} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Harry James Potter/i)).toBeInTheDocument();
    expect(await screen.findByText(/Male/i)).toBeInTheDocument();
    expect(await screen.findByText(/English/i)).toBeInTheDocument();
    expect(await screen.findByText(/Human/i)).toBeInTheDocument();
  });

  it('validate that clicking on a card opens a detailed card component', async () => {
    const testSearchValue = 'Harry James Potter';
    localStorage.setItem('search-input', testSearchValue);

    render(<App />);

    const item = (await screen.findByText('Harry James Potter')).closest('a');
    if (item) await fireEvent.click(item);

    expect(await screen.queryByTestId(/details/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/harry-potter/i)).toBeInTheDocument();
  });

  it('check that clicking triggers an additional API call to fetch detailed information', async () => {
    const testSearchValue = 'Harry James Potter';
    localStorage.setItem('search-input', testSearchValue);

    render(<App />);

    const spy = vi.spyOn(global, 'fetch');

    const item = (await screen.findByText('Harry James Potter')).closest('a');
    if (item) await fireEvent.click(item);

    await expect(spy).toHaveBeenCalledTimes(1);
    await expect(global.window.location.pathname).toContain(
      '/page/1/details/42d8662b-24a2-434b-8394-945ff0daa194'
    );
  });
});

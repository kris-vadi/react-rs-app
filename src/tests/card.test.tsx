import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { userEvent } from '@testing-library/user-event';
import { ActorAttributes, CardParams } from '../types/types';
import Card from '../components/Card/Card';
import { MemoryRouter } from 'react-router';

describe('Tests for the Card component', () => {
  it('Ensure that the card component renders the relevant card data', async () => {
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
    render(
      <MemoryRouter>
        <Card itemData={cardData} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Harry James Potter/i)).toBeTruthy();
    expect(await screen.findByText(/Male/i)).toBeTruthy();
    expect(await screen.findByText(/English/i)).toBeTruthy();
    expect(await screen.findByText(/Half-blood/i)).toBeTruthy();
    expect(await screen.findByText(/Human/i)).toBeTruthy();
  });

  it('Validate that clicking on a card opens a detailed card component', async () => {
    render(<App />);

    const item = (await screen.findByText('2-Headed Baby')).closest('a');
    if (item) await userEvent.click(item);

    await waitFor(() => {
      expect(screen.getByAltText(/2-headed-baby/i)).toBeTruthy();
    });
  });

  it('Check that clicking triggers an additional API call to fetch detailed information', async () => {
    // render(<App />);
    // const item = (await screen.findByText('2-Headed Baby')).closest('a');
    // if (item) await userEvent.click(item);
    // await waitFor(() => {
    // });
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
});

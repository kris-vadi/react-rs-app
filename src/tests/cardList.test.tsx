import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Tests for CardList component', () => {
  it('verify that the component renders the specified number of cards', async () => {
    render(<App />);

    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: '5' } });

    await waitFor(() => {
      const currentCards = screen.queryAllByTestId('card');
      expect(currentCards.length).toBe(5);
    });
  });

  it('check that an appropriate message is displayed if no cards are present', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Search...');

    fireEvent.change(input, { target: { value: 'aaabbbccc' } });

    await waitFor(() => {
      const cards = screen.queryAllByTestId('card');
      expect(cards.length).toBe(0);

      const element = screen.queryByText(
        'Sorry, no items match your search...'
      );
      expect(element).toBeInTheDocument();
    });
  });
});

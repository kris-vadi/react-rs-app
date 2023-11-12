import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Tests for CardList component', () => {
  it('Verify that the component renders the specified number of cards', async () => {
    render(<App />);

    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: '5' } });

    await waitFor(() => {
      const currentCards = screen.getAllByTestId('card');
      expect(currentCards).toHaveLength(5);
    });
  });

  it('Check that an appropriate message is displayed if no cards are present', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Search...');

    fireEvent.change(input, { target: { value: 'aaabbbccc' } });

    await waitFor(() => {
      const element = screen.findByText('Sorry, no items match your search...');
      expect(element).toBeTruthy();
    });
  });
});

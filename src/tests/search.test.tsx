import { describe, it, expect } from 'vitest';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Search from '../components/Search/Search';
import { MemoryRouter } from 'react-router';
import MainPage from '../pages/Main/MainPage';

describe('Tests for Search component', () => {
  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search...');

    fireEvent.change(input, { target: { value: 'testSearchValue' } });

    await waitFor(() => {
      const currentValue = localStorage.getItem('search-input');
      expect(currentValue).toBe('testSearchValue');
    });
  });

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    const testSearchValue = 'testSearchValue';
    localStorage.setItem('search-input', testSearchValue);

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const currentValue = await screen.findByRole('textbox');
    expect(currentValue).toHaveValue(testSearchValue);
  });
});

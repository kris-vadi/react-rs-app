import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/Search/Search';
import { MemoryRouter } from 'react-router';

vi.mock('react-redux', () => {
  return {
    useSelector: vi.fn().mockReturnValue({}),
    useDispatch: vi.fn(),
  };
});

describe('Tests for Search component', () => {
  it('verify that clicking the Search button saves the entered value to the local storage', async () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'testSearchValue' } });

    const currentValue = await localStorage.getItem('search-input');
    expect(currentValue).toBe('testSearchValue');
  });

  it('check that the component retrieves the value from the local storage upon mounting', async () => {
    const testSearchValue = 'testSearchValue';
    localStorage.setItem('search-input', testSearchValue);

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    const currentValue = await screen.findByRole('textbox');
    expect(currentValue).toHaveValue(testSearchValue);
  });
});

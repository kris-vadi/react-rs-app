import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests for the Detailed Card componentent', () => {
  beforeEach(async () => {
    const testSearchValue = 'Hermione Jean Granger';
    localStorage.setItem('search-input', testSearchValue);

    render(<App />);

    const item = (await screen.findByText('Hermione Jean Granger')).closest(
      'a'
    );
    if (item) await fireEvent.click(item);
  });

  it('check that a loading indicator is displayed while fetching data', async () => {
    expect(screen.getAllByTestId('loader'));
  });

  it('make sure the detailed card component correctly displays the detailed card data', async () => {
    expect(await screen.findByTestId(/details/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/hermione-granger/i)).toBeInTheDocument();
    expect(await screen.findByText(/Blud Status:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Muggle-Born/i)).toBeInTheDocument();
  });

  it('ensure that clicking the close button hides the component', async () => {
    await fireEvent.click(await screen.findByTestId('close'));

    expect(await screen.queryByTestId(/details/i)).toBeInTheDocument();
  });
});

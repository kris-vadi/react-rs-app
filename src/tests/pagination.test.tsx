import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests for Pagination component', () => {
  it('make sure the component updates URL query parameter when page changes', async () => {
    render(<App />);

    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(await screen.queryByText('2')).not.toBeInTheDocument();
    expect(location.pathname).toBe('/page/1');

    fireEvent.click(await screen.findByTestId('next'));

    expect(await screen.findByText('2')).toBeInTheDocument();
    expect(await screen.queryByText('1')).not.toBeInTheDocument();
    expect(location.pathname).toBe('/page/2');
  });
});

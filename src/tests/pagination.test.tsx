import { fireEvent, render, screen } from '@testing-library/react';
import { server } from './mocks/server';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';

const store = setupStore();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());

describe('Tests for Pagination component', () => {
  it('make sure the component updates URL query parameter when page changes', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    fireEvent.click(await screen.findByTestId('next'));
    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(await screen.queryByText('2')).not.toBeInTheDocument();
  });
});

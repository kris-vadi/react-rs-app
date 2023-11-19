import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { server } from './mocks/server';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import MainContent from '../components/MainContent/MainContent';

const store = setupStore();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());

describe('Tests for the Detailed Card componentent', () => {
  it('check that a loading indicator is displayed while fetching data', async () => {
    render(
      <Provider store={store}>
        <MainContent />
      </Provider>
    );
    expect(screen.getAllByTestId('loader'));
  });
});

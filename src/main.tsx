import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/Error/ErrorBoundary';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = document.getElementById('root') as HTMLElement;

if (root)
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  );

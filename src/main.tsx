import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/Error/ErrorBoundary';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

if (root)
  ReactDOM.createRoot(root).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );

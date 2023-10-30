import HomePage from './components/HomePage/HomePage';
import ErrorBoundary from './components/Error/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App;

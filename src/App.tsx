import HomePage from './components/HomePage/HomePage';
import ErrorBoundary from './components/Error/ErrorBoundary';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    );
  }
}

export default App;

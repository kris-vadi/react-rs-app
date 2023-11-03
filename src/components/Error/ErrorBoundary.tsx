import { Component, ErrorInfo } from 'react';
import styles from '../HomePage/HomePage.module.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error Boundry:');
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className={styles.main}>
          Something went wrong... Please reload the page.
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

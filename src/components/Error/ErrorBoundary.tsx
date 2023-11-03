import { Component, ReactNode } from 'react';
import styles from '../HomePage/HomePage.module.scss';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
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

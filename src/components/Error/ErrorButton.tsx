import React, { Component } from 'react';
import styles from './ErrorButton.module.scss';

class ErrorButton extends Component {
  state = {
    hasError: false,
  };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Synthetic error');
    }
    return (
      <button className={styles.errorButton} onClick={this.handleClick}>
        Generate error
      </button>
    );
  }
}

export default ErrorButton;

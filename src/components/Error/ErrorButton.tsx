import { useState } from 'react';
import styles from './ErrorButton.module.scss';

const ErrorButton = () => {
  const [isError, setIsError] = useState<boolean>(false);

  function generateError() {
    setIsError(true);
  }

  if (isError) {
    throw new Error('Error Buttton Generator');
  }

  return (
    <button className={styles.errorButton} onClick={generateError}>
      Generate error
    </button>
  );
};

export default ErrorButton;

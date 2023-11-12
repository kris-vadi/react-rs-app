import { useState } from 'react';
import Button from '../UI/Button/Button';

const ErrorButton = () => {
  const [isError, setIsError] = useState<boolean>(false);

  function generateError() {
    setIsError(true);
  }

  if (isError) {
    throw new Error('Error Buttton Generator');
  }

  return <Button text="Generate error" onClick={generateError} />;
};

export default ErrorButton;

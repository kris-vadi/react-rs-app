import styles from './CloseButton.module.scss';
import { CloseButtonProps } from './CloseButtonProps';

const CloseButton = (props: CloseButtonProps) => {
  return <div className={styles.close} onClick={props.callback}></div>;
};

export default CloseButton;

import { Link } from 'react-router-dom';
import styles from '../../components/MainContent/MainContent.module.scss';

const NotFound = () => {
  return (
    <main className={styles.main}>
      <p>
        404 Page Not Found
        <div>
          <Link to="/" className={styles.link}>
            Back to Main Page
          </Link>
        </div>
      </p>
    </main>
  );
};

export default NotFound;

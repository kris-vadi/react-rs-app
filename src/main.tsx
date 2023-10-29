import ReactDOM from 'react-dom/client';
import './styles/App.scss'
import App from './App';


const root = document.getElementById('root') as HTMLElement;

if (root) ReactDOM.createRoot(root).render(<App />);
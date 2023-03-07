import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

/**
 * Initializes a React application by rendering
 * the root component into a DOM container.
 *
 * @param container - The container element to render the root component into.
 * @returns void
 */
const initializeApp = (container: HTMLElement): void => {
  const root = createRoot(container);
  root.render(<App />);
};

// Initialize App if corresponding element was found in index.html
const container = document.getElementById('app');
if (container) {
  initializeApp(container);
}

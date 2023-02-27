import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test Frame for render checks to assure everything
 * was added to the DOM correctly.
 *
 * @returns {void}
 */
const testRenderApp = (): void => {
  render(<App />);
  const element = screen.getByText('');
  expect(element).toBeInTheDocument();
};

test('renders element', testRenderApp);

import { FunctionComponent } from 'react';
import MenuBar from '../components/user-interface/MenuBar';

/**
 * Renders the FAQ page, which displays
 * collapsible question sections that
 * provide answers to how the app works
 * and what's possible with the features.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
const FAQ: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <MenuBar />
    </div>
  );
};

export default FAQ;

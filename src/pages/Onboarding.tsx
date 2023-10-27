import { FunctionComponent } from 'react';
import MenuBar from '../components/user-interface/MenuBar';

/**
 * Renders the Onboarding page, which displays
 * the Extension and Faucit setup, as well as
 * how to register and log into the chat app.
 *
 * @returns {JSX.Element} The rendered Onboarding page.
 */
const Onboarding: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <MenuBar />
    </div>
  );
};

export default Onboarding;

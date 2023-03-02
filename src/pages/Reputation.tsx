import { FunctionComponent } from 'react';
import MenuBar from '../components/user-interface/MenuBar';

/**
 * Renders the Reputation page, which displays
 * the user's achievements and Web3 claims.
 *
 * @returns {JSX.Element} The rendered Reputation page.
 */
const Reputation: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <MenuBar />
      <h1>Reputation</h1>
    </div>
  );
};

export default Reputation;

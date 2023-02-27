import { FunctionComponent } from 'react';
import Menu from '../components/user-interface/Menu';

/**
 * Renders the Friendlist page, which displays
 * the user's profile and all friendrequests made,
 * including their status and the friends metadata.
 *
 * @returns {JSX.Element} The rendered Friendlist page.
 */
const Friendlist: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Menu />
      <h1>Friendlist</h1>
    </div>
  );
};

export default Friendlist;

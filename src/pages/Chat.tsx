import { FunctionComponent, useEffect } from 'react';
import MenuBar from '../components/user-interface/MenuBar';
import { useGlobalState } from '../contexts/GlobalState';
import useGetUserAddress from '../components/extension-bridge/Address';

/**
 * Renders the Chat page, which displays
 * all open chat rooms with friends.
 *
 * @returns {JSX.Element} The rendered Chat page.
 */
const Chat: FunctionComponent = (): JSX.Element => {
  // Embed global state
  const { universalProfileAddress } = useGlobalState();

  // UI relying on external variable changes, load afterwards
  useEffect(() => {
    // Only change address if it was received
    if (universalProfileAddress !== null) {
      console.log(
        'Universal Profile Address changed:',
        universalProfileAddress,
      );
    }
  }, [universalProfileAddress]);
  useGetUserAddress();

  return (
    <div>
      <MenuBar />
      <h1>Chat</h1>
      <p>User Address: {universalProfileAddress}</p>
    </div>
  );
};

export default Chat;

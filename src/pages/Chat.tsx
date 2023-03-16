import { FunctionComponent, useEffect } from 'react';
import MenuBar from '../components/user-interface/MenuBar';
import { useGlobalState } from '../contexts/GlobalState';
import useGetUserAddress from '../components/extension-bridge/Address';
import DM3 from 'dm3-react';
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
      <DM3
        hideStorageSelection={true}
        defaultContact={universalProfileAddress}
        defaultServiceUrl=";_;"
        inline={true}
        style={{ margin: '2rem', minHeight: '600px' }}
        showHelp={true}
      />
    </div>
  );
};

export default Chat;

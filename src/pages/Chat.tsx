import { FunctionComponent } from 'react';
import MenuBar from '../components/user-interface/MenuBar';

/**
 * Renders the Chat page, which displays
 * all open chat rooms with friends.
 *
 * @returns {JSX.Element} The rendered Chat page.
 */
const Chat: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <MenuBar />
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;

import { FunctionComponent } from 'react';
import Menu from '../components/user-interface/Menu';

/**
 * Renders the Chat page, which displays
 * all open chat rooms with friends.
 *
 * @returns {JSX.Element} The rendered Chat page.
 */
const Chat: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Menu />
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;

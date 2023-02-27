import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Chat from './pages/Chat';
import FAQ from './pages/FAQ';
import Friendlist from './pages/Friendlist';
import Reputation from './pages/Reputation';

/**
 * Entry point of the application.
 *
 * Renders page components based on the current URL path, using React Router.
 * When navigating to a certain path, the route renders the corresponding
 * component.
 *
 * @returns {ReactNode} The root node of the React application.
 */
const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/friendlist" element={<Friendlist />} />
        <Route path="/reputation" element={<Reputation />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing.tsx';
import Onboarding from './pages/Onboarding.tsx';
import Chat from './pages/Chat.tsx';
import FAQ from './pages/FAQ.tsx';
import Friendlist from './pages/Friendlist.tsx';
import Reputation from './pages/Reputation.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/friendlist" element={<Friendlist />} />
        <Route path="/reputation" element={<Reputation />} />
      </Routes>
    </Router>
  );
}

export default App;

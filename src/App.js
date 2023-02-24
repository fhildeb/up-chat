import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/chat" component={Chat} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </Router>
  );
}

export default App;

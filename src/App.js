import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RedirectPage from "./components/RedirectPage";
import Home from "./components/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:hash" component={RedirectPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;

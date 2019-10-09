import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CategoryPledges from "./components/CategoryPledges";

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard/actionCategory" component={CategoryPledges} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;

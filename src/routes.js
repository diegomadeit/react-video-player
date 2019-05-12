import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateVideo from "./pages/CreateVideo";
import ViewVideo from "./pages/ViewVideo";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/create-video" component={CreateVideo} />
      <Route path="/" component={ViewVideo} />
    </Switch>
  </Router>
);

export default Routes;

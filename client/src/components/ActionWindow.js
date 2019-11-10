import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateIncident from "./ActionWindowPages/CreateIncident"

function ActionWindow() {
  return(<div id="actionWindow">
    <Router>
      <Route path="/incident/create">
        <CreateIncident />
      </Route>
      <Route path="/incident/view/all">
        <p>View all incidents</p>
      </Route>
    </Router>
  </div>)
}

export default ActionWindow;

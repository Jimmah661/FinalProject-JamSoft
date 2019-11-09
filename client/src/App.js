import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPortal from './pages/LoginPortal'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/loginPage">
            <LoginPortal />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

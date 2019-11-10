import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPortal from './pages/LoginPortal';
import TechPortal from "./pages/TechPortal";
import ClientPortal from "./pages/ClientPortal"


class App extends Component {
  state = {
    techAccess: true
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/loginPage">
            <LoginPortal />
          </Route>
          <Route path="/">
            {(this.state.techAccess) ? <TechPortal /> : <ClientPortal />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

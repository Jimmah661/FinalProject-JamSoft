import React, {Component} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import CreateIncident from "./ActionWindowPages/CreateIncident";
import ReportPage from './ActionWindowPages/reportPage';

class ActionWindow extends Component {



  render() {
    return(<div id="actionWindow">
      <Switch>
        <Route path="/incident/create">
          <CreateIncident />
        </Route>
        <Route path="/incident/view/all">
          <ReportPage />
        </Route>
      </Switch>
    </div>)
  }
}

export default ActionWindow;

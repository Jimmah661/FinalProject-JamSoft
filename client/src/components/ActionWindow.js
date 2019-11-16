import React, {Component} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import CreateIncident from "./ActionWindowPages/CreateIncident";
import ReportPage from './ActionWindowPages/reportPage';
import SingleView from './ActionWindowPages/singleView';

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
        <Route path="/incident/view">
          <SingleView />
        </Route>
      </Switch>
    </div>)
  }
}

export default ActionWindow;

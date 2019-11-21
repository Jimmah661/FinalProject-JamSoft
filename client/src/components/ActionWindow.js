import React, {Component} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import CreateIncident from "./ActionWindowPages/CreateIncident";
import ReportPage from './ActionWindowPages/reportPage';
import SingleView from './ActionWindowPages/singleView';
import Manage from './ActionWindowPages/manage';
import styled from "styled-components";
import Logo from './jdlogo.png'

const WelcomePage = styled.div`
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const WelcomeText = styled.h1`
font-family: verdana;
font-size: 5em;
display: inline;
`;

class ActionWindow extends Component {

  render() {
    return(<div id="actionWindow">
      <Switch>
        <Route path="/" exact>
          <WelcomePage>
            <WelcomeText>Welcome to</WelcomeText><br />
            <img src={Logo} style={{width: "400px"}} />
          </WelcomePage>
        </Route>
        <Route path="/incident/create">
          <CreateIncident />
        </Route>
        <Route path="/incident/view/all">
          <ReportPage />
        </Route>
        <Route path="/incident/view">
          <SingleView />
        </Route>
        <Route path="/incident/manage">
          <Manage />
        </Route>
      </Switch>
    </div>)
  }
}

export default ActionWindow;

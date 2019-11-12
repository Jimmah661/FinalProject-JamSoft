import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBarButton from "./NavBarComp/NavBarButton"

function NavBar() {
  return(<div id="navbar">
    <Link to="/incident/create">
      <NavBarButton button="Create Incident" />
    </Link>
    <Link to="/incident/view/all">
      <NavBarButton button="View Incidents" />
    </Link>
  </div>)
}

export default NavBar;

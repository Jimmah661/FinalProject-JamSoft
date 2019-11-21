import React from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarComp/NavBarButton"

function NavBar() {
  return(<div id="navbar">
    <Link to="/incident/create">
      <NavBarButton button="Create Incident" />
    </Link>
    <Link to="/incident/view/all">
      <NavBarButton button="View Incidents" />
    </Link>
    <Link to="/incident/manage">
      <NavBarButton button="Manage Incidents" />
    </Link>
  </div>)
}

export default NavBar;

import React from "react";
import {Link} from 'react-router-dom';
import Logo from "./jdlogo.png";

function Header() {
  return(
  <div id="header">
    <Link to="/">
      <img src={Logo} alt="jamsoft Logo" id="logo" />
    </Link>
  </div>)
}

export default Header;

import React, {Component} from "react";
import ActionWindow from "../components/ActionWindow";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import "./TechPortal.css"

class Homepage extends Component {
  render() {
    return(
      <div id="playWindow">
        <Header />
        <NavBar />
        <ActionWindow />
      </div>
    )
  }
};

export default Homepage;

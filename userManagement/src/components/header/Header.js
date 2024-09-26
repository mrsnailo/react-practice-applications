import React from "react";
import AppLogo from "../../assets/logo/logo.svg";
import "./Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification/Notification";
const Header = () => {
  return (
    <header className="main_header">
      <div className="header_items">
        <div className="app_details">
          <a href="http://localhost:3000">
            <img src={AppLogo} alt="Logo"></img>
          </a>
        </div>
        <div className="panel">
          <Notification />
          <a className="label" href="http://localhost:3000">
            <p>UMS-1.0</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

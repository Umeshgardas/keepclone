import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="70px" />
        <h2>Google Keep</h2>
      </div>
    </>
  );
};

export default Header;

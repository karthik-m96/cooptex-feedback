import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
          <div>
            <img className="logo" src="/img/logo.png" alt="" />
          </div>
          <h1>Cooptex</h1>
        </div>
      </div>
  );
};

export default Navbar;

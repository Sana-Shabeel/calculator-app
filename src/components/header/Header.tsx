import React from "react";
import Theme from "./Theme";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="theme-word">
        <p>Theme</p>
        <Theme />
      </div>
    </div>
  );
};

export default Header;

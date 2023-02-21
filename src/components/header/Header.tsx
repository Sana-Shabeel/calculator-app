import React from "react";
import "./header.scss";

interface Props {
  switchThemeHandler: (theme: string) => void;
}

const Header = ({ switchThemeHandler }: Props) => {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="theme-word">
        <p>Theme</p>
        <div className="theme-changer">
          <div className="themes-level">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>

          <div className="dot-container">
            <input
              type="range"
              name="slider"
              min="1"
              max="3"
              defaultValue="1"
              id="slider"
              onChange={(e) => switchThemeHandler(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

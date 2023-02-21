import React from "react";
import "./header.scss";

const Theme = () => {
  return (
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
          id="slider"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Theme;

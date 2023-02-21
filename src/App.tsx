import { useState } from "react";
import Header from "./components/header/Header";
import "./App.scss";
import Keys from "./components/keypad/Keys";

function App() {
  const [toggle, setToggle] = useState("theme1");

  const switchThemeHandler = (num: string) => {
    switch (num) {
      case "1":
        setToggle("theme1");
        break;
      case "2":
        setToggle("theme2");
        break;
      case "3":
        setToggle("theme3");
        break;
    }
  };

  return (
    <div className={`${toggle} App`}>
      <div className="main">
        <Header switchThemeHandler={switchThemeHandler} />
        <div className="screen"></div>
        <Keys />
      </div>
    </div>
  );
}

export default App;

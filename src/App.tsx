import { useState } from "react";
import Header from "./components/header/Header";
import "./App.scss";
import Keys from "./components/keypad/Keys";

function App() {
  return (
    <div className="App theme1">
      <div className="main">
        <Header />
        <div className="screen"></div>
        <Keys />
      </div>
    </div>
  );
}

export default App;

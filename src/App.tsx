import { useState } from "react";
import Header from "./components/header/Header";
import "./App.scss";
import Keys from "./components/keypad/Keys";

function App() {
  const [toggle, setToggle] = useState("theme1");
  const [calc, setCalc] = useState<string[]>([]);
  const [result, setResult] = useState<number>();

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

  const getKeyValueHandler = (key: string) => {
    if (key === "=") {
      let c = calc.join("").replaceAll("x", "*");
      console.log(BigInt(eval(c)));

      let r = eval(c);

      setResult(r);
      setCalc([r.toString()]);
    }
    if (key === "DEL") {
      setCalc((prev) => prev.slice(0, -1));
      setResult(0);
    }
    if (key === "RESET") {
      setCalc((prev) => []);
      setResult(0);
    }

    // do not add to calc
    if (key !== "=" && key !== "DEL" && key !== "RESET") {
      setCalc((prev) => [...prev, key]);
    }
  };

  return (
    <div className={`${toggle} App`}>
      <div className="main">
        <Header switchThemeHandler={switchThemeHandler} />
        <div className="screen">
          {result ? result.toLocaleString("en-US") : calc}
        </div>
        <Keys getKeyValueHandler={getKeyValueHandler} />
      </div>
    </div>
  );
}

export default App;

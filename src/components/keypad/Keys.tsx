import React from "react";
import Key from "./Key";
import "./key.scss";

const Keys = () => {
  const calcKeys = [
    { key: "7", classname: "key" },
    { key: "8", classname: "key" },
    { key: "9", classname: "key" },
    { key: "DEL", classname: "key del" },
    { key: "4", classname: "key" },
    { key: "5", classname: "key" },
    { key: "6", classname: "key" },
    { key: "+", classname: "key" },
    { key: "1", classname: "key" },
    { key: "2", classname: "key" },
    { key: "3", classname: "key" },
    { key: "-", classname: "key" },
    { key: ".", classname: "key" },
    { key: "0", classname: "key" },
    { key: "/", classname: "key" },
    { key: "x", classname: "key" },
    { key: "RESET", classname: "key reset" },
    { key: "=", classname: "key equal" },
  ];
  return (
    <div className="keypad">
      {calcKeys.map(({ key, classname }, idx) => (
        <Key key={idx} value={key} classname={classname} />
      ))}
    </div>
  );
};

export default Keys;

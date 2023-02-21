import React from "react";
import "./key.scss";

interface Props {
  getKeyValueHandler: (key: string) => void;
}

const Keys = ({ getKeyValueHandler }: Props) => {
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
        <input
          key={idx}
          type="button"
          value={key}
          className={classname}
          onClick={(e) => getKeyValueHandler(key)}
        />
      ))}
    </div>
  );
};

export default Keys;

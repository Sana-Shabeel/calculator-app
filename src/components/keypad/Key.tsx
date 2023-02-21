import React from "react";
import "./key.scss";

interface Props {
  value: string;
  classname: string;
}

const Key = ({ value, classname }: Props) => {
  return (
    <>
      <input type="button" value={value} className={classname} />
    </>
  );
};

export default Key;

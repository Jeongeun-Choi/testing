import React, { FC } from "react";

type InputProps = {
  name?: string;
  age?: number;
};

const Input: FC<InputProps> = ({ name, age }) => {
  return (
    <div className="input-result">
      <div id="name">이름: {name}</div>
      <div id="age">나이: {age}</div>
    </div>
  );
};

export default Input;

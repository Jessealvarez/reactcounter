import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    if (count < 9) {
      setCount(count + 1);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <div className="menu-text">
          <h1 id="logo">Logo</h1>
          <h1 id="menu">Menu</h1>
        </div>
      </div>
      <div className="count">
        <button id="minus" onClick={minus}>
          {" "}
          -{" "}
        </button>
        <button id="plus" onClick={plus}>
          +
        </button>
      </div>
      <h1>{count}</h1>{" "}
    </div>
  );
};

export default Counter;

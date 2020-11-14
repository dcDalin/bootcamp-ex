import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Child = ({ submit }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};

export default Child;

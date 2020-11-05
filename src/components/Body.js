import React, { useState, useEffect } from "react";

// useEffect hook
// fetch api

const Body = (props) => {
  const [count, setCount] = useState(10);

  const [user, setUser] = useState([
    {
      name: "Lee",
      age: 23,
      town: "Manila",
    },
    {
      name: "Aubrey",
      age: 10,
      town: "Manila",
    },
  ]);

  const data = user.map((user) => {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.town}</p>
      </div>
    );
  });

  const handleClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Body {props.country}</h1>
      <h1>Count is {count}</h1>
      <button onClick={handleClick}>+</button>
      {data}
    </div>
  );
};

export default Body;

import React from "react";

const Header = (props) => {
  return (
    <h1>
      {props.greeting} you are {props.age} years old. {props.country}
    </h1>
  );
};

export default Header;

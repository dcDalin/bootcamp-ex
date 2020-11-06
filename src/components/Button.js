import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  border: 2px solid red;
  padding: 2em;
  background-color: black;
`;

const Button = (props) => {
  return <CustomButton>{props.name}</CustomButton>;
};

export default Button;

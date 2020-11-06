import React from "react";

const Footer = (props) => {
  const { country, town } = props;
  return (
    <h1 className="footer">
      Footer {country} {town}
    </h1>
  );
};

export default Footer;

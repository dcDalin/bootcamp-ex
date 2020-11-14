import React from "react";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;

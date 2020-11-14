import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          The amazing app
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {token ? (
            <>
              <Nav.Link as={Link} to="/customers">
                Customers
              </Nav.Link>
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;

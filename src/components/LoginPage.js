import React, { useState } from "react";
import MainLayout from "./MainLayout";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://aqueous-basin-88250.herokuapp.com/login", { username })
      .then((data) => {
        localStorage.setItem("token", data.data.accessToken);
        history.push("/customers");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error caught", error);
        toast.error("Something went wrong, please try again later");
        setLoading(false);
      });
  };

  return (
    <MainLayout>
      <div style={{ width: "50%", margin: "auto" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Form>
      </div>
    </MainLayout>
  );
};

export default LoginPage;

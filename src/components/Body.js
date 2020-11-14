import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Child from "./Child";

const Body = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  // const anything = (data) => console.log(data);

  return (
    <>
      <Child submit={props.submit} />
      <Form onSubmit={handleSubmit(props.submit)}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            ref={register({ required: true, min: 2 })}
          />
        </Form.Group>
        {errors.firstName && "First name is required"}

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            ref={register({ required: true })}
          />
        </Form.Group>
        {errors.lastName && "Last name is required"}

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <select name="country" ref={register}>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="Kenay">Kenay</option>
          </select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Body;

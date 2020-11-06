import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CustomButton from "./Button";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./body.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Body = () => {
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(false);

  const [run, setRun] = useState(false);

  setTimeout(() => {
    setRun(true);
  }, 5000);

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        setAbilities(res.data.abilities);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  // const fetchPokemon = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((res) => {
  //       setAbilities(res.data.abilities);
  //     })
  //     .then(() => {})
  //     .then(() => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const abilitiesData = abilities.map((anything, index) => {
    return <p key={anything.ability.id}>{anything.ability.name}</p>;
  });

  // if(loading === true) {
  //   // show loading p tag
  // } else {
  //   // show pokemon data
  // }

  return (
    <>
      <div className="footer body" style={{ fontSize: "10px" }}>
        {loading ? <p>Loading... </p> : <div>{abilitiesData}</div>}
        <p
          style={{
            color: "green",
            backgroundColor: "#000000",
            fontSize: "20px",
            padding: "2em",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          I am having so much fun today
        </p>
      </div>
      <Title>Styled component</Title>
      <CustomButton name="Log in" />
      <CustomButton name="Sign In" />
      <Button>Button from react</Button>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Body;

import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return <div>{loading ? <p>Loading... </p> : <div>{abilitiesData}</div>}</div>;
};

export default Body;

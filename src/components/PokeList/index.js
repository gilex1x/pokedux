import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokeList = () => {
  const pokemons = Array(20).fill("PichurriaChu");

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </Grid>
  );
};

export default PokeList;

import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokeList = () => {
  const pokemons = useSelector((state) => state.list);

  return (
    <Grid textAlign='center'>
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </Grid>
  );
};

export default PokeList;

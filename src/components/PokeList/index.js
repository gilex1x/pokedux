import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokeList = () => {
  const pokemons = useSelector((state) => state.list);

  return (
    <Grid>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokeList;

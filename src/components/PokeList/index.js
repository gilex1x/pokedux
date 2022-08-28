import React from "react";
import { Grid } from "semantic-ui-react";
//import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokeList = (props) => {
  return <Grid textAlign='center'>{props.children}</Grid>;
};

export default PokeList;

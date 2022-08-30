import React from "react";
import { Grid } from "@mui/material";
//import PokemonCard from "./PokemonCard";

const PokeList = (props) => {
  return (
    <Grid container textAlign='center'>
      {props.children} 
    </Grid>
  );
};

export default PokeList;

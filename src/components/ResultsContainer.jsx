import React from "react";
import { Grid } from "@mui/material";
//import PokemonCard from "./PokemonCard";

const ResultsContainer = (props) => {
  return (
    <Grid container spacing={4} textAlign='center'>
      {props.children}
    </Grid>
  );
};

export default ResultsContainer;

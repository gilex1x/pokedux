import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Image, Card, Typography } from "@mui/material";
import { setFavorite, deleteFavorite } from "../../redux/actions";

const PokemonCard = (props) => {
  const dispatch = useDispatch();
  const { pokemon } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch(deleteFavorite(pokemon.id));
    } else {
      dispatch(setFavorite(pokemon));
    }
  };
  const handleClick = () => {
    dispatch({ type: "SET_POKEMON_ID", payload: pokemon.id });
  };
  return (
    <Grid container>
      <Typography variant='h3'>Name</Typography>
    </Grid>
  );
};

export default PokemonCard;

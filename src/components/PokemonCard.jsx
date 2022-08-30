import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { setFavorite, deleteFavorite } from "../redux/actions";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    console.log(pokemon);
  }, []);
  return (
    <Grid item xs={3}>
      <Card sx={{ border: "1px blakc", borderRadius: "20px" }}>
        <CardContent>
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name}-imagen`}
          />
          <Typography variant='h5'>{pokemon.name}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          {pokemon.types.map((type, index) => (
            <Button key={index}>{type.type.name}</Button>
          ))}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PokemonCard;

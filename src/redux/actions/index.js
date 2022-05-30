import { FETCH_POKEMONS, SET_ERROR, SET_POKEMONS, SET_FAVORITE, DELETE_FAVORITE } from "./types";
export const setPokemon = (payload) => ({
  type: SET_POKEMONS,
  payload: payload,
});
//cons reduxthunk, esta action, devuelve otra función
export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const setFavorite = (id) => ({
  type: SET_FAVORITE,
  payload: id,
});
export const deleteFavorite = (id) => ({
  type: DELETE_FAVORITE,
  payload: id,
});

export const setError = () => ({
  type: SET_ERROR,
});

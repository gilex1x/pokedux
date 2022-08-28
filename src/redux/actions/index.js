import * as types from "./types";
export const setPokemon = (payload) => ({
  type: types.SET_POKEMONS,
  payload: payload,
});
//cons reduxthunk, esta action, devuelve otra función
export const fetchPokemons = () => ({
  type: types.FETCH_POKEMONS,
});

export const setFavorite = (pokemon) => ({
  type: types.SET_FAVORITE,
  payload: pokemon,
});
export const deleteFavorite = (id) => ({
  type: types.DELETE_FAVORITE,
  payload: id,
});

export const setError = () => ({
  type: types.SET_ERROR,
});

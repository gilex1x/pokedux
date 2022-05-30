import { FETCH_POKEMONS, SET_ERROR, SET_POKEMONS } from "./types";
export const setPokemon = (payload) => ({
  type: SET_POKEMONS,
  payload: payload,
});
//cons reduxthunk, esta action, devuelve otra función
export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const setError = () => ({
  type: SET_ERROR,
});

//Las funciones de aca son los actions creatorr.
import { SET_ERROR, SET_POKEMONS } from "./types";
export const setPokemon = (payload) => ({
  type: SET_POKEMONS,
  payload: payload,
});

export const setError = () => ({
  type: SET_ERROR,
});

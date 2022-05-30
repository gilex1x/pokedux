//Las funciones de aca son los actions creatorr.
import { getLimitedPokemons } from "../../api";
import {
  FETCH_POKEMONS,
  GET_POKEMONS_DATA,
  SET_ERROR,
  SET_POKEMONS,
} from "./types";
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

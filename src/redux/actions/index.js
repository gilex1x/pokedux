//Las funciones de aca son los actions creatorr.
import { SET_POKEMON } from "./types";
export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload: payload,
});

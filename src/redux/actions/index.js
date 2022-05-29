//Las funciones de aca son los actions creatorr.
import { getLimitedPokemons } from "../../api";
import { GET_POKEMONS_DATA, SET_ERROR, SET_POKEMONS } from "./types";
export const setPokemon = (payload) => ({
  type: SET_POKEMONS,
  payload: payload,
});
//cons reduxthunk, esta action, devuelve otra función
export const getPokemonsData = () => (dispatch) => {
  const fetchData = async () => {
    try {
      const res = await getLimitedPokemons();
      const { results: pkmns } = await res.json();
      const result = await Promise.all(pkmns.map((pkmn) => fetch(pkmn.url)));
      const pokemonsData = await Promise.all(result.map((pkmn) => pkmn.json()));
      dispatch(setPokemon(pokemonsData));
    } catch (err) {
      dispatch(setError({ message: "Ocurrió un error", err }));
    }
  };
  fetchData()
};

export const setError = () => ({
  type: SET_ERROR,
});

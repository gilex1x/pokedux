const URL = process.env.URL || "https://pokeapi.co/api/v2/";
const LIMIT = 150;

export const getLimitedPokemons = () => {
  return fetch(`${URL}pokemon?limit=${LIMIT}`);
};

export const getPokemonById =(id) => {
  return fetch(`${URL}pokemon/${id}`);
};

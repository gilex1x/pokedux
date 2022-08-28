const URL = process.env.URL || "https://pokeapi.co/api/v2/";
const LIMIT = 150;

export const getLimitedPokemons = () => {
  return fetch(`${URL}pokemon?limit=${LIMIT}`);
};

export const getPokemonById =(id) => {
   return fetch(`${URL}pokemon/${id}`);
};

export const getPokemonsDetails = async () => {
  try {
    const res = await getLimitedPokemons();
    const { results: pkmns } = await res.json();
    const result = await Promise.all(pkmns.map((pkmn) => fetch(pkmn.url)));
    const pokemonsData = await Promise.all(result.map((pkmn) => pkmn.json()));
    //console.log(pokemonsData)
    return pokemonsData
    //dispatch(setPokemon(pokemonsData));
  } catch (err) {
    console.log({ message: "Ocurrió un error", err });
  }
};
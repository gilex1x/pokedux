import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemon, setError } from "../../actions";
import getPokemons from "../../api/getPokemons";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const pkmns = useSelector((state) => state.list);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPokemons();
        const { results: pkmns } = await res.json();
        const result = await Promise.all(pkmns.map((pkmn) => fetch(pkmn.url)));
        const pokemonsData = await Promise.all(
          result.map((pkmn) => pkmn.json())
        );
        dispatch(setPokemon(pokemonsData));
      } catch (err) {
        dispatch(setError({ message: "Ocurrió un error", err }));
      }
    };
    fetchData();
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pkmns} />
    </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import { setError, setPokemon } from "../../redux/actions";
import { getLimitedPokemons } from "../../api";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLimitedPokemons();
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
      <PokeList />
    </div>
  );
}

export default Home;

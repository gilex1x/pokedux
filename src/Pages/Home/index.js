import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import PokeList from "../../components/PokeList";
import PokemonCard from "../../components/PokeList/PokemonCard";
import Searcher from "../../components/Searcher";
import Loader from "../../components/Loader";

import "./styles.css";

const Home = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(fetchPokemons());
  };
  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      {!isLoading ? (
        <PokeList>
          {pokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </PokeList>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;

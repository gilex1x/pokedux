import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/actions";
import ResultsContainer from "../../components/ResultsContainer.jsx";
import PokemonCard from "../../components/PokemonCard";
import Loader from "../../components/Loader.jsx";

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
      {!isLoading ? (
        <ResultsContainer>
          {pokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </ResultsContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;

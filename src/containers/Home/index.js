import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import { setPokemon } from "../../redux/actions";
import { getLimitedPokemons } from "../../api";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getLimitedPokemons()
      .then((res) => res.json())
      .then((data) => dispatch(setPokemon(data.results)));
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      <PokeList />
    </div>
  );
}

export default Home;

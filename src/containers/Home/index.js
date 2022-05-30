import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import { fetchPokemons } from "../../redux/actions";

import "./styles.css";

function Home() {
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
      <PokeList />
    </div>
  );
}

export default Home;

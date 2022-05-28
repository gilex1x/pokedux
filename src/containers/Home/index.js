import React, { useEffect } from "react";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import { getLimitedPokemons } from "../../api";
import "./styles.css";

function Home() {
  useEffect(() => {
    getLimitedPokemons()
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      <PokeList />
    </div>
  );
}

export default Home;

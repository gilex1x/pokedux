import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import { getPokemonsData} from "../../redux/actions";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsData());
  }, []);
  return (
    <div className='Home'>
      <Searcher />
      <PokeList />
    </div>
  );
}

export default Home;

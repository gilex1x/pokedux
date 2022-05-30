import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import Loader from "../../components/Loader";
import { fetchPokemons } from "../../redux/actions";

import "./styles.css";

const Home = () => {
  const list = useSelector((state) => state.list);
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
      {list.length >= 1 ? <PokeList /> : <Loader />}
    </div>
  );
};

export default Home;

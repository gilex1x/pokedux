import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeList from "../../components/PokeList";
import Searcher from "../../components/Searcher";
import Loader from "../../components/Loader";
import { fetchPokemons } from "../../redux/actions";

import "./styles.css";

const Home = () => {
  const isLoading = useSelector((state) => state.isLoading);
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
      {!isLoading ? <PokeList /> : <Loader />}
    </div>
  );
};

export default Home;

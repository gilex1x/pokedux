import React from 'react';
import PokeList from '../../components/PokeList';
import Searcher from '../../components/Searcher';
import './styles.css';

function Home() {
  return (
    <div className='Home'>
      <Searcher />
      <PokeList />
    </div>
  );
}

export default Home;

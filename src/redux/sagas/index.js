import { call,put, takeEvery } from "redux-saga/effects";
import { FETCH_POKEMONS,SET_POKEMON_ID  } from "../actions/types";
import { getPokemonsDetails,getPokemonById } from "../../api";
import { setPokemon } from "../actions";

function* fetchPokemonData(action){
  console.log(action)
  try {
    const pokemonData=yield call(getPokemonById,action.payload)
    console.log(pokemonData)
  } catch (error) {
    console.error(error)
  }
}

function* fetchPokemonsWithDetails() {
  try {
    const pokemonsDetails = yield call(getPokemonsDetails);
    yield put(setPokemon(pokemonsDetails));
  } catch (error) {
    console.error(error);
  }
}
//Ahora declaramos cada cuanto se llama la función de arriba

function* pokemonSaga() {
  //primero la pasasamos el type de action que debe esperar
  //y después la funcion a ejecutar
  yield takeEvery(FETCH_POKEMONS, fetchPokemonsWithDetails);
  yield takeEvery(SET_POKEMON_ID, fetchPokemonData)
}

export default pokemonSaga;

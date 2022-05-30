import { call,put, takeEvery } from "redux-saga/effects";
import { FETCH_POKEMONS } from "../actions/types";
import { getPokemonsDetails } from "../../api";
import { setPokemon } from "../actions";

function* fetchPokemonsWithDetails(action) {
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
}

export default pokemonSaga;

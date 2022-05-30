import {
  FETCH_POKEMONS,
  SET_FAVORITE,
  SET_ERROR,
  SET_POKEMONS,
  DELETE_FAVORITE,
} from "../actions/types";

const initialState = {
  list: [],
  favorites: [],
  isError: false,
  isLoading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    case FETCH_POKEMONS:
      return {
        ...state,
        isLoading: true,
      };

    case SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((pokemon) => pokemon.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default pokemonReducer;

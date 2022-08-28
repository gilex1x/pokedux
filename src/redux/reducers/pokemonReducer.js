import * as types from "../actions/types";

const initialState = {
  list: [],
  favorites: [],
  isError: false,
  isLoading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case types.SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    case types.FETCH_POKEMONS:
      return {
        ...state,
        isLoading: true,
      };

    case types.SET_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case types.DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default pokemonReducer;

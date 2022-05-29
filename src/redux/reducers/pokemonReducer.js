import { SET_ERROR, SET_POKEMONS } from "../actions/types";

const initialState = {
  list: [],
  isError: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default pokemonReducer;

import React from "react";
import ReactDOM from "react-dom";
//Después se actualiza a redux toolkit
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import pokemonReducer from "./redux/reducers/pokemonReducer";

const store = createStore(
  pokemonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

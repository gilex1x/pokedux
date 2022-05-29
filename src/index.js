import React from "react";
import ReactDOM from "react-dom";
//Después se actualiza a redux toolkit
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import pokemonReducer from "./redux/reducers/pokemonReducer";
import thunk from "redux-thunk";
import { logActions } from "./middlewares";
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const composedEnhacers = composeAlt(applyMiddleware(thunk, logActions))

const store = createStore(pokemonReducer, composedEnhacers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

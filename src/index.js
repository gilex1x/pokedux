import React from "react";
import ReactDOM from "react-dom";
//Después se actualiza a redux toolkit
import { createStore, compose, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import App from "./containers/App";
import pokemonReducer from "./redux/reducers/pokemonReducer";
import pokemonSaga from "./redux/sagas";
import "./index.css";
//const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(pokemonReducer, middlewares);
sagaMiddleware.run(pokemonSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

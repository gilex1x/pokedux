import React from "react";
import ReactDOM from "react-dom";
//Después se actualiza a redux toolkit
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import pokemonReducer from "./redux/reducers/pokemonReducer";
import thunk from "redux-thunk";
import { logActions } from "./middlewares";
import pokemonSaga from "./redux/sagas";
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const composedEnhacers = composeAlt(
  applyMiddleware(sagaMiddleware, logActions)
);

const store = createStore(pokemonReducer, composedEnhacers);
sagaMiddleware.run(pokemonSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

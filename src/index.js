import React from "react";
import ReactDOM from "react-dom";
//Después se actualiza a redux toolkit
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import pokemonReducer from "./redux/reducers/pokemonReducer";
import { logActions } from "./middlewares";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logActions)
);

const store = createStore(pokemonReducer,composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

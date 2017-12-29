import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import configureStore from "./store/configureStore";
const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {

  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if(process.env.NODE_ENV !== "production") {
  if(module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

render();

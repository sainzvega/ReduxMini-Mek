import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import 'semantic-ui-css/semantic.css';

import configureStore from "app/store/configureStore";
const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {

  const App = require("app/layout/App").default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if(process.env.NODE_ENV !== "production") {
  if(module.hot) {
    module.hot.accept("app/layout/App", () => {
      setTimeout(render);
    });
  }
}

render();

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import { Provider } from "react-redux";
import tasks from "./reducers";

import "./index.css";

const store = createStore(tasks, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

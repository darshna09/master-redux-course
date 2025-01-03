import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import App from "./components/App";

const store = createStore(rootReducer);
// store.subscribe(() => console.log("store", store.getState()));s

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

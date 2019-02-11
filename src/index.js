import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Bracket from "./containers/Bracket";

ReactDOM.render(
  <Provider store={store}>
    <Bracket />
  </Provider>,
  document.getElementById("app")
);

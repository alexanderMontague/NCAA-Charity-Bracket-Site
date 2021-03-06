import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import createHashHistory from "history/createHashHistory";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <Router history={hashHistory} basename={process.env.PUBLIC_URL}>
    {Routes}
  </Router>,
  document.getElementById("app")
);

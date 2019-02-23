import React from "react";
import { Switch, Route } from "react-router";

import BracketLayout from "./containers/BracketLayout";
import Home from "./components/Home";
import About from "./components/About";
import Bracket from "./containers/Bracket";

const DefaultComponent = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={componentProps => (
        <BracketLayout>
          <Component {...componentProps} />
        </BracketLayout>
      )}
    />
  );
};

const routes = (
  <Switch>
    <DefaultComponent exact path={"/"} component={Home} />
    <DefaultComponent exact path={"/about"} component={About} />
    <DefaultComponent exact path={"/bracket"} component={Bracket} />
  </Switch>
);

export default routes;

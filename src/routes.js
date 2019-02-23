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
console.log(process.env.PUBLIC_URL);

const routes = (
  <Switch>
    <DefaultComponent
      exact
      path={process.env.PUBLIC_URL || "" + "/"}
      component={Home}
    />
    <DefaultComponent
      exact
      path={process.env.PUBLIC_URL || "" + "/about"}
      component={About}
    />
    <DefaultComponent
      exact
      path={process.env.PUBLIC_URL || "" + "/bracket"}
      component={Bracket}
    />
  </Switch>
);

export default routes;

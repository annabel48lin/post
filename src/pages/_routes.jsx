import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SubscribePage from "./subscribe";
import PlantPage from "./plant";
import AboutPage from "./about";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/plants/">
          <PlantPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/subscribe">
          <SubscribePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Form from "./components/form";
import ShowData from "./components/ShowData";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/showData" exact component={ShowData} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

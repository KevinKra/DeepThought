import React from "react";
import App from "./App";
import ReviewPage from "./ReviewPage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Router path="/main/:mainId" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

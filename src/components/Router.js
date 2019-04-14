import React from "react";
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main/:mainId" component={MainPage} />
        <Route path="/review/:cardId" component={ReviewPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

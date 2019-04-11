import React from "react";
import { Switch, Route } from "react-router-dom";

import News from "./News";
import { About } from "./About";
import { Contacts } from "./Contacts";

const Main = () => (
  <Switch>
    <Route exact path="/" component={News} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Main;

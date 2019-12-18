import React from "react";
import { Switch, Route } from "react-router-dom";
import OptionA from "./pages/OptionA";
import OptionB from "./pages/OptionB";
import User from "./User/User";
import Team from "./Team/Team";
import GloginForm from "./Login/GLoginForm";
import LoginForm from "./Login/LoginForm";

export default function SiteSwitch() {
  return (
    <Switch>
      <Route path="/optiona">
        <OptionA />
      </Route>
      <Route path="/optionb">
        <OptionB />
      </Route>
      <Route path="/user/:user" children={<User />} />
      <Route path="/team/:team" children={<Team />} />
      <Route path="/login" children={<GloginForm />} />
    </Switch>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
import OptionA from "../pages/OptionA";
import OptionB from "../pages/OptionB";
import User from "../User/User";
import Team from "../Team/Team";
import { LoginForm, Register, ResetPassword, TermsOfService } from "../Login";

export default function SiteSwitch() {
  return (
    <Switch>
      <Route exact path="/" children={LoginForm} />
      <Route path="/optiona">
        <OptionA />
      </Route>
      <Route path="/optionb">
        <OptionB />
      </Route>
      <Route path="/user/:user" children={<User />} />
      <Route path="/team/:team" children={<Team />} />
      <Route path="/login" children={<LoginForm />} />
      <Route path="/register" children={<Register />} />
      <Route path="/reset_password" children={<ResetPassword />} />
      <Route path="/terms_of_service" children={<TermsOfService />} />
    </Switch>
  );
}

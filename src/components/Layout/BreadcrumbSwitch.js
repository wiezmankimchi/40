import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from './routes'

export default function SiteSwitch() {

  return (
    <Switch>
      {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.breadcrumb />}
              />
            ))}
    </Switch>
  );
}

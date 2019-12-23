import React from 'react'

import OptionA from "../pages/OptionA";
import OptionB from "../pages/OptionB";
import User from "../User/User";
import Team from "../Team/Team";
import { LoginForm, Register, ResetPassword, TermsOfService } from "../Login";

export const routes = [
    {
      path: "/",
      exact: true,
      main: () => <LoginForm/>
    },
    {
      path: "/optiona",
      exact: true,
      breadcrumb: () => <div>Home / Optoin A</div>,
      main: () => <OptionA />
    },
    {
      path: "/optionb",
      exact: true,
      breadcrumb: () => <div>Home / Optoin B</div>,
      main: () => <OptionB />
    },
    {
      path: "/user/:user",
      exact: true,
      breadcrumb: () => <div>Home / User </div>,
      main: () => <User/>
    },
    {
      path: "/team/:team",
      exact: true,
      breadcrumb: () => <div>Home / Team </div>,
      main: () => <Team/>
    },
    {
      path: "/login",
      exact: true,
      breadcrumb: () => <div>Home </div>,
      main: () => <LoginForm/>
    },
    {
      path: "/register",
      exact: true,
      breadcrumb: () => <div>Home / Register</div>,
      main: () => <Register/>
    },
    {
      path: "/reset_password",
      exact: true,
      breadcrumb: () => <div>Home / Password Reset</div>,
      main: () => <ResetPassword/>
    },
    {
      path: "/terms_of_service",
      exact: true,
      breadcrumb: () => <div>Home / Terms of Service</div>,
      main: () => <TermsOfService/>
    },

  ];
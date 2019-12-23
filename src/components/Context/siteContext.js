import React from "react";

export const siteValues = {
  breadcrumb: ["Home"]
};

export const siteReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return siteValues;
    case "addNew":
      return { breadcrumb: state.push(action.value) };
    case "removeLast":
      return { breadcrumb: state.pop() };
    default:
      return state;
  }
};

export const siteContext = React.createContext();

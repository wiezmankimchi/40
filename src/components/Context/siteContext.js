import React from "react";

export const siteValues = {
  breadcrumb: ["Home"]
};

export const SiteContext = React.createContext();

// use the folllowing to create the breadcrumbs
// present: siteContext.breadcrumb.join(" / ")
// remove the last: siteContext.breadcrumb.pop()
// add a new one: siteContext.breadcrumb.push(NEW_VALUE)

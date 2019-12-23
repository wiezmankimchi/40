import React, { useReducer } from "react";
import SiteLayout from "./components/Layout/Layout";
import SiteSwitch from "./components/Layout/SiteSwitch";
import "./App.css";
import {
  siteContext,
  siteValues,
  siteReducer
} from "./components/Context/siteContext";
function App() {
  const [store, dispatch] = useReducer(siteReducer, siteValues);
  return (
    <siteContext.Provider value={{ store, dispatch }}>
      <SiteLayout>
        <SiteSwitch />
      </SiteLayout>
    </siteContext.Provider>
  );
}

export default App;

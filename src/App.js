import React from "react";
import SiteLayout from "./components/Layout/Layout";
import SiteSwitch from "./components/Layout/SiteSwitch";
import "./App.css";
import { siteValues, SiteContext } from "./components/Context/siteContext";

function App() {
  return (
    <SiteContext.Provider value={siteValues}>
      <SiteLayout>
        <SiteSwitch />
      </SiteLayout>
    </SiteContext.Provider>
  );
}

export default App;

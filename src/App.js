import React, { useReducer } from "react";
import SiteLayout from "./components/Layout/Layout";
import SiteSwitch from "./components/Layout/SiteSwitch";
import "./App.css";

// import { SiteContext } from './components/Context/SiteContext'

function App() {
  // const [style, setStyle] = useState("light")
  // const [visible, setVisible] = useState(true)

  // function toggleStyle() {
  //   setStyle(style => ( style === "light" ? "dark" :"light"))
  // }

  // function toggleVisible() {
  //     setVisible(visible => !visible)
  // }

  return (
    // <SiteContext.Provider value={{ style, visible, toggleStyle, toggleVisible}}>
    <SiteLayout>
      <SiteSwitch />
    </SiteLayout>
    // </SiteContext.Provider>
  );
}

export default App;

import React from 'react';
import SiteLayout from './components/Layout'
import SiteSwitch from './components/SiteSwitch'
import './App.css';


function App() {
  return (
    <SiteLayout>
      <SiteSwitch/>
    </SiteLayout>
  )
}

export default App;

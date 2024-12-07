import { useState, useEffect } from "react";
import About from "./components/About"
import Events from "./components/Events"
import Merch from "./components/Merch";
import SponsorsSection from "./components/SponsorsSection";
import Guidelines from "./components/Guidelines";

const App = () => {
  
  return (
    <div>
      <About/>
      <Events/>
      <SponsorsSection />
      <Merch />
      <Guidelines />
      
    </div>
  )
};

export default App;

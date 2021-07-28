
import TopBar from "./components/Topbar/TopBar";
import Intro from "./components/Introduction/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Works/Work";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from "react";


function App() {
const [menuopen, setMenuopen] = useState(false);

  return (
    <div className="app">
     <TopBar menuopen={menuopen} setMenuopen={setMenuopen}/>
     <div className="sections">
       
     <Intro/>
     <Portfolio/>
     <Work/>
     <Contact/>
      
     </div>
    </div>
  );
}

export default App;

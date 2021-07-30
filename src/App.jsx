
import TopBar from "./components/Topbar/TopBar";
import Intro from "./components/Introduction/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Works/Work";
import Contact from "./components/Contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.scss";
import { useState } from "react";
import Footer from "./components/footer/Footer";


function App() {
const [menuopen, setMenuopen] = useState(false);



  return (
    <div className="app">
     <TopBar menuopen={menuopen} setMenuopen={setMenuopen}/>
     <Menu menuopen={menuopen} setMenuopen={setMenuopen}/>
     <div className="sections">
       
     <Intro/>
     <Portfolio/>
     <Work/>
     <Contact/>
     
     <Footer/>
     </div>
    
    </div>
  );
}

export default App;

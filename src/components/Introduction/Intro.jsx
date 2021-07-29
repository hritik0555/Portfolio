import "./Intro.scss";
import { init } from "ityped";
import { useEffect,useRef } from "react";



export default function Intro() {

const textRef=useRef();

  useEffect(()=>{
    init(textRef.current, { showCursor: false, 
      backDelay:  1500,
      showCursor:  true,
      typeSpeed:200,
      strings: ["Competitive Programmer"] });
  },[]);
    return (
        <div className="intro" id="intro">
          <div className="left">
          <div className="image">
            <img src="assets/hritik.png" alt="hritik" />
          </div>

          </div>
          <div className="right">

            <div className="wrapper">
              <h2>Hey, I'm</h2>
              <h1>Hritik Gautam</h1>
              <h3>Full Stack Developer <span ref={textRef}></span></h3>
            </div>
          </div>
        </div>
    )
}

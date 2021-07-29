import "./work.scss"
import { useState } from "react";

export default function Work() {


    const [currentSlider,setCurrentSlider]=useState(0);
    const data=[
       

        

        {
            id:1,
            icon:"assets/GCP-1.png"
        },
        {
            id:2,
            icon:"assets/Certificate.png"
        },

    ];


   const handleClick= (way)=>{
      
      way==="left" ? setCurrentSlider(currentSlider>0 ? currentSlider-1:data.length-1) : 
      setCurrentSlider(currentSlider<data.length-1 ? currentSlider + 1 : 0);

   }



    return (
        
        <div className="works" id="work">

            
    
    <div className="slider" style={{transform:`translateX(-${currentSlider*100}vw)`}}>
    
        {data.map(d=>(

<div className="container">

        <div className="item">
           


                <div className="imgcontainer">
                    <img src={d.icon} alt="" />
                </div>

            
            
        </div>

        </div>

        ))}
    
   
    </div>

    <img src="assets/a1.png"  className="arrow left" alt="" onClick={()=>handleClick("left")} />
    <img src="assets/a1.png" className="arrow right" alt="" onClick={()=>handleClick("")} />
        </div>
    )
}

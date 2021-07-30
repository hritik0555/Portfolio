import { useState } from "react";
import PortfolioList from "../PorfolioList/PortfolioList";
import "./portfolio.scss"
import  { webPortfolio } from "../data";
import { featuredPortfolio } from "../data";
import { useEffect } from "react";

export default function Portfolio() {

  const [selected,setSelected]=useState("featured");

  const [data,setData]=useState([]);

    const list=[
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"web",
            title:"Web App"
        }
    ];

    useEffect(() => {

        switch(selected)
        {
            case "featured":setData(featuredPortfolio);
            break;
            case "web":setData(webPortfolio);
            break;
            default:setData(featuredPortfolio);
        }
       
    }, [selected]);


    return (
        <div className="portfolio" id="portfolio">

            <h1>Projects</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {data.map(d=>(
        

                <a href={d.link}>

                
           
                <div className="item">
                   
                    <img src={d.img} />
                    
                    <h3>{d.title}</h3>
                    
                </div>
                </a>
                ))}
                
                
            </div>
          
            
        </div>
    )
}

import "./TopBar.scss"

export default function TopBar({menuopen,setMenuopen}) {
    return (
        <div className={"topbar " + (menuopen && "active")} >

            <div className="wrapper">
            
              
              
              <div className="right">
               <div className="toggle" onClick={()=>setMenuopen(!menuopen)}>
                   
                   <span className="line1"></span>
                   <span className="line2"></span>
                   <span className="line3"></span>

               </div>
              </div>

            </div>
            
        </div>
    )
}

import "./Menu.scss";

export default function Menu({menuopen,setMenuopen}) {
    return (
        <div className={"menu " + (menuopen && "active")}>
            <ul>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#work">Achievement</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuopen(false)}>
                    <a href="#footer">Reach Me</a>
                </li>
                
            </ul>
            
        </div>
    )
}


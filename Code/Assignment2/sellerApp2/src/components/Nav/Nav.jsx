import { useState } from "react"
import "./Nav.css"
const Nav = (props)=>{
    const [active,changeActive]= useState("NewYork");
    return(
       <div className="nav-section">
        <button onClick={()=>{
            props.City("NewYork")
            changeActive("NewYork")
            props.more(0);
       }} className={`nav-button ${active == "NewYork" ? `active`:``}`}>New York</button>
        <button onClick={()=>{
            props.City("Mumbai")
            changeActive("Mumbai");
            props.more(0);
            }} className={`nav-button ${active == "Mumbai" ? `active`:``}`}>Mumbai</button>
        <button onClick={()=>{
            props.City("Paris");
            changeActive("Paris");
            props.more(0);
            }} className={`nav-button ${active == "Paris" ? `active`:``}`}>Paris</button>
        <button onClick={()=>{
            props.City("London")
            changeActive("London")
            props.more(0);
            }} className={`nav-button ${active == "London" ? `active`:``}`}>London</button>
       </div>
    )
}

export default Nav;
import { useState } from "react"
import "./Nav.css"
const Nav = (props)=>{
    const [active,changeActive]= useState();
    return(
       <div className="nav-section">
        <button onClick={()=>{
            props.City("NewYork")
            changeActive("NewYork")
       }} className={`nav-button ${active == "NewYork" ? `active`:``}`}>New York</button>
        <button onClick={()=>{
            props.City("Mumbai")
            changeActive("Mumbai");
            }} className={`nav-button ${active == "Mumbai" ? `active`:``}`}>Mumbai</button>
        <button onClick={()=>{
            props.City("Paris");
            changeActive("Paris");
            }} className={`nav-button ${active == "Paris" ? `active`:``}`}>Paris</button>
        <button onClick={()=>{
            props.City("London")
            changeActive("London")}} className={`nav-button ${active == "London" ? `active`:``}`}>London</button>
       </div>
    )
}

export default Nav;
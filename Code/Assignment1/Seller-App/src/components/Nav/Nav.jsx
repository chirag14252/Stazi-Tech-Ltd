import { useState } from "react"
import "./Nav.css"

const Nav = (props)=>{
    // state for managing the input entered by the user
    const [searchQuery,changeSearchQuery] = useState('');
    return(
      <div className="nav-body">
        <div className="nav-item">
            <input type="text"className="nav-search" placeholder="Search..." onChange={(e)=>{
                changeSearchQuery(e.target.value);
                }}/>
            <button onClick={()=>{props.search(searchQuery)}}><img src="/magnifying-glass.png" width={30}></img></button>
        </div>
      </div>
    )
}

export default Nav;
import "./Nav.css"

const Nav = ()=>{
    // state for managing the input entered by the user
    return(
      <div className="nav-body">
        <div className="nav-item">
            <input type="text"className="nav-search" placeholder="Search..." onChange={(e)=>{}}/>
            <img src="/magnifying-glass.png" width={30}></img>
        </div>
      </div>
    )
}

export default Nav;
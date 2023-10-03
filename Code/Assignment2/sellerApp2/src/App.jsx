import Card from "./components/Cards/Card"
import Nav from "./components/Nav/Nav";
import axios from "axios";
import "./app.css"
import { useEffect, useState } from "react"
function App() {
const [City,changeCity] = useState("NewYork");
const [Property,changeProperty] = useState([])
const [More,changeMore] = useState(0);

const CityNavData = (data)=>{
   changeCity(data);
}
useEffect(()=>{
  axios.get(`http://localhost:3000/${City}`).then((res)=>{
    changeProperty(res.data);
  })
  },[City])

 const FrontData = Property.slice(0,6)
  return <>
    <Nav City = {CityNavData}/>
    <div className="cards-grid">
      {
        !More?FrontData.map(item => {
          return <Card PropDetails={item} />
        }):Property.map(item => {
          return <Card PropDetails={item} />
        })
      }
    </div>
    {/* show more option */}
    <div className={`ShowMoreClass ${More?`show`:``}`}><button className ="more-button"onClick={()=>{
      changeMore(1);
    }}>Show More</button></div>
  </>
}

export default App;
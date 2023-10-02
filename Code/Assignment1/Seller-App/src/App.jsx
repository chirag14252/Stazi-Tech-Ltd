import Card from "./components/Card/Card"
import axios from "axios";
import "./app.css"
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";

function App() {
//all the api Data will be stored inside carslist
 const [carsList,changeCarList] = useState();
 //fetch the APIs at page load
 useEffect(()=>{
  axios.get("http://localhost:3000/vehicles?page=1").then(
    (res)=>{
      changeCarList(res.data[0].data);
    }
  )
 },[])
  return <>
  <Nav/>
    <div className="cards-grid">
      {
        carsList?.map((car,idx) => {
          return <Card key={idx} carDetails={car} />
        })
      }
    </div>
  </>
}

export default App;
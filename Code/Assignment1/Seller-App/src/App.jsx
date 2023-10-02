import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./app.css"
function App() {
  //all the api Data will be stored inside carslist
  const [carsList, changeCarList] = useState(null);
  const [searchQuery, searchQueryChange] = useState('');
  const [allList,changeAllList] = useState();
  const [page,changePage] = useState(1);
  const searchQueryFun = (data) => {
    searchQueryChange(data);
  }
  const collectingPageData = (data)=>{
    changePage(data)
  }
  //fetch the APIs at page load---------------
  useEffect(() => {
    axios.get(`http://localhost:3000/vehicles?page=${page}`).then(
      (res) => {
        changeCarList(res.data[0].data);
      }
    )
    axios.get("http://localhost:3000/vehicles").then(
      (res)=>{
        changeAllList(res.data);
      }
    )
  }, [searchQuery,page])
  
//logic for filtering----------------
const ans = allList?.map((i)=>{
  return  i.data.filter((j)=>{
     return j.vehicle_name.toLowerCase() === searchQuery.trim().toLowerCase();
  })
});
const filteredAns = ans?.filter((innerArray) => innerArray.length > 0);
// ----------------------------------
  return <>
    <Nav search={searchQueryFun} />
    <div className="cards-grid">
      {
        searchQuery.length == 0?
          carsList?.map((car, idx) => {
            return <Card key={idx} carDetails={car} />
          })
          : filteredAns[0]?.map((car, idx) => {
             return <Card key={idx} carDetails={car} />
            })
      }

    </div>
    <Footer pageInfo={collectingPageData}/>
  </>
}

export default App;
import React, {useEffect, useState}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData,setPlantData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=> res.json())
    .then(cardData=>setPlantData(cardData))
  },[])

  function handleNewPlantSubmit(plantObj){
    // plantObj.preventDefault()
    console.log(plantObj)
  }
  
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlantSubmit}/>
      <Search />
      {/* When the app starts, I can see all plants. */}
      <PlantList plantData={plantData}/>
    </main>
  );
}

export default PlantPage;

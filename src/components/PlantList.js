import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  // When the app starts, I can see all plants.

  return (
    <ul className="cards">{plantData.map((card)=>(
      <PlantCard image={card.image} name={card.name} price={card.price} key={card.id}/>
    ))}</ul>
  );
}

export default PlantList;

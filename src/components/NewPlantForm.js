import React, {useState} from "react";

function NewPlantForm({plantArr, setPlantArr}) {
  // const [name ,setName] = useState("")
  // const [image ,setImage] = useState("")
  // const [price ,setPrice] = useState("")

  const [form,setForm] = useState({})

  // function handleNewPlantSubmit(event){
  //   event.preventDefault()
  //   const newPlantObj ={
  //     name: name,
  //     image: image,
  //     price: price

  //   }
  //   fetch("http://localhost:6001/plants",{
  //     method : "POST",
  //     headers:{
  //       "Content-Type" : "applictaion/json"
  //     },
  //     body: JSON.stringify(newPlantObj)
  //   })
  //   .then(res=>res.json())
  //   .then(newPlantObj=>{ handleNewPlant(newPlantObj)
  //   })
  // }

  let handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setForm({...form,[name]: value})
  }

  let handleNewPlant = (e) =>{
    e.preventDefault()
     fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) =>{
        //  setPlantArr([data, ...plantArr])
         console.log(data)
        });
  }
  

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

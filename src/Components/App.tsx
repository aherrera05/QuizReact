import React, {useState} from 'react';
import {PLANTS_DATA,Plants} from './data';
import {Card} from './card';
import '../App.css';
import { render } from '@testing-library/react';




function App() {
  const [plants, setPlants] = useState(PLANTS_DATA);

  
  /** MANEJO DE ESTADO Y ACTUALIZACION DE CANTIDAD DESDE COMPONENTE PADRE */
  // const [currentId, setCurrentId] = useState(0);
  
  // const addPlant = () => {
  //     setPlants((previous:any) => {
  //       return previous.map((plant:any) => {
  //         if(plant.id === currentId){
  //           return {...plant, quantity:plant.quantity+1}
  //         }
  //         return plant;
  //       });
  //     });
  //   }


  // const removePlant = () => {
  //   setPlants((previous:any) => {
  //     return previous.map((plant:any) => {
  //       if(plant.id === currentId){
  //         return {...plant, quantity:plant.quantity-1}
  //       }
  //       return plant;
  //     });
  //   });
  // }

  // const setPlant = (id:number) => {
  //   setCurrentId(id);
  // }
 
   
    
  
  return (

    <div>
      {plants.length > 0 ? plants.map( (plant) => 
      //   <div  key={plant.id} onClick={() => setPlant(plant.id!) }>
      <div  key={plant.id}>
        <Card  title={plant.title} description={plant.description} imgURL={plant.imgURL} quantity={plant.quantity}/>
      </div>
      
      ): null }
     
    </div>
  );
}

export default App;

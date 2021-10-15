import React from 'react';
import { Plant } from './Plant';
import { PLANTS_DATA } from './data';


interface PlantClassState{
  count: number;
  error: '';
}
export class Plants extends React.Component< PlantClassState> {
  state:PlantClassState = {
      count: 0,
      error:''
  }

}




export type Planta = {
  id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number
}


const App: React.FC = () => {
  const plants: Planta[] = [
    {
      id: 1,
      title: 'Monstera Deliciosa',
      description: 'planta tropical',
      imgURL: '',
      quantity: 10,
    },
    {
      id: 2,
      title: 'Ficus Lyarata',
      description: 'Arbol interior',
      imgURL: 'https://thumbs.dreamstime.com/b/beautiful-fiddle-leaf-tree-ceramic-pot-white-background-ficus-lyrata-vector-illustration-stylish-houseplant-design-element-184366080.jpg',
      quantity: 14,
    },
    {
      id: 3,
      title: 'Veranera',
      description: 'Arbusto de diferentes colores, florea todo el año',
      imgURL: 'https://i.pinimg.com/originals/95/61/cf/9561cf3f081fd8ea6401d14d4645853a.jpg',
      quantity: 5,
    }, {
      id: 4,
      title: 'Copey',
      description: 'Arbol',
      imgURL: 'https://www.elicriso.it/es/como_cultivar/clusia/imagenes/clusia.jpg',
      quantity: 10,
    },
    {
      id: 5,
      title: 'Ficus Burgury',
      description: 'Arbusto',
      imgURL: 'https://www.elicriso.it/es/como_cultivar/clusia/imagenes/clusia.jpg',
      quantity: 12,
    }];
    
    return <React.Fragment>
    <h2>Lista de Plantas</h2>
   

    {plants.map((plant) => <Plant id ={plant.id} title={plant.title} description={plant.description} imgURL={plant.imgURL} quantity={plant.quantity}/>)
    },   <button >Increment</button>
    <button>Decrement</button>
   
    </React.Fragment>
    
  }
export default App;

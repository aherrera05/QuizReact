import React from "react";


interface PlantClassProps {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number
}

interface PlantClassState{
    count: number;
    error: '';
}

export class PlantClass extends React.Component<PlantClassProps, PlantClassState> {
    state:PlantClassState = {
        count: 0,
        error:''
        
        
    }
    increment = (count:number) => {
		this.setState((previosState)=>({count:previosState.count + count}));
	}
	decrement = (num:number) => {
		this.setState((previosState)=>({count:previosState.count - num }));
	}

    componentDidMount(){
        //EJEMPLOS DE USO
        //API CALL ACTUALIXAR EL ESTADO CON EL RESULTADO
       //AGREGAR EVENT LISTENER
        console.log('Se agrego componEnte en el DOM');
    
    }
    componentDidUpdate(){
        if(this.state.count < 0){
       alert('Count no debe ser negativo')
        }
        console.log('Se actualizo componente');
        
    }
    componentWillMount(){
        //ELIMINAR UN EVENT LISTENER
        console.log('componente se va a eliminar');
    }
    render(){
    const {id, title, description, imgURL, quantity}= this.props;
    const {count} = this.state;
    return  <div>
    <ul>
    <li>ID: {id}</li>
    <li>Title: {title}</li>
    <li>Description: {description}</li>
    <li>image: {imgURL}</li>
    <li>Quantity: {quantity}</li>
    </ul>
    <p>Count {count}</p>
   <p>{this.state.error}</p>
    <button onClick={()=>this.increment(1)}>Increment</button>
			<button onClick={() => this.decrement(2)}>Decrement</button>
</div>
}
}


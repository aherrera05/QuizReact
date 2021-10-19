import React, {useState} from 'react';
import {Plants} from './data';

// interface CardProps extends Plants {
// 	addPlant?:()=> void;
// 	removePlant?: () => void;
// }

export const Card:React.FC<Plants> = ({title, description, quantity, imgURL}) => {
	const [plantQuantity, setPlantQuantity] = useState<number>(quantity);

	const addPlant = () => {
		setPlantQuantity((previousQuantity) => previousQuantity+1);
	};

	const removePlant = () => {
		setPlantQuantity((previousQuantity) => previousQuantity-1);

	}
	return <div>
		<h1>{title}</h1>
		<p>{description}</p>
		<img src={imgURL} alt={title} />
		<span>{plantQuantity}</span>
		<button onClick={()=>addPlant()}>+</button>
		<button onClick={()=>removePlant()}>-</button>
	</div>
}
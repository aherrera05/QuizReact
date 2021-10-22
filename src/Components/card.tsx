import React, {useState} from 'react';
import {Plants} from './data';
import styled from 'styled-components';
import '../index.css';
import { render } from '@testing-library/react';

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
	
	const TotalMessage =plantQuantity <= 0 ? 'Planta no disponible':'Plantas';
	
    
	
      
	return <Container>
		<h1>{title}</h1>
		<p>{description}</p>
		<ImageContainer>
		<img src={imgURL} alt={title} />
		</ImageContainer>
		<span>{plantQuantity}</span><h1>{TotalMessage}</h1>
		
		<Button onClick={()=>addPlant()}>+</Button>
		<Button onClick={()=>removePlant()}>-</Button>

	</Container>
}

const Container = styled.div`
	width:200px;
	padding: 15px 10px;
	background: #DF8EB0 ;
`;

const Button = styled.button`
	
	background: blue ;
	color: white;

	&:hover {
		background: gray;
		color: black;
	}
`;

 const ImageContainer = styled.div`
	width:  300px;
	heigth: 500px
	
 
`;


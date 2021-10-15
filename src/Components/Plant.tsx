import React from "react";

interface PlantProps {
	id: number;
	title: string;
	description: string;
	imgURL: string;
	quantity: number
}


        
   

export const Plant: React.FC<PlantProps> = ({id, title, description, imgURL, quantity}) => {


	return <div>
		
		
		
		
		
		<ul >
			<li>ID: {id}</li>
			<li>Title: {title}</li>
			<li>Description: {description}</li>
			<li> imgURL: {imgURL}</li>
            <li> Quantity: {quantity}</li>
			
   

			
		</ul>
		

	</div>
}



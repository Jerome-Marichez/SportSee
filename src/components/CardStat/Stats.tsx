import React from "react";
import styled from "styled-components";
import calories from "./calories-icon.svg";
import proteines from "./protein-icon.svg";
import glucides from "./carbs-icon.svg";
import lipides from "./fat-icon.svg";



interface CardProps {
	type: "Calories" | "Proteines" | "Glucides" | "Lipides";
	weight: number;
}

/**
 * @param type Accept 'Calories' | 'Proteines' | 'Glucides' | 'Lipides' as parameter
 * @param weight display the weight 
 * @example <CardStat type="Calories" weight={50}/>
 * @returns A component who display a stat 
 */

export default function CardStat({ type, weight }: CardProps) {

	let svg: string = "";

	switch (type) {
		case 'Calories':
			svg = calories;
			break;
		case 'Proteines':
			svg = proteines;
			break;
		case 'Glucides':
			svg = glucides;
			break;
		case 'Lipides':
			svg = lipides;
			break;
	}


	return (
		<Stat>
			<div className="flex">
				<img src={svg}></img>
				<div className="flex-text">
					<h3>
						{weight}
						{type === 'Calories' ? "kCal" : "g"}
					</h3>
					<h4>{type}</h4>
				</div>
			</div>
		</Stat>
	)

}



const Stat = styled.div`
	height: 124px;
	min-width: 258px;
	
	width: 100%; 
	border-radius: 5px;
	padding: 32px;
	background-color: ${({ theme }) => theme.bgContainerColor}; 


		
	
	img {
		height: 60px; 
		width: 60px; 	 
	}


	.flex { 
		display flex;
		flex-direction: row; 
		gap: 24px; 
	}
	
	
	.flex-text { 
		display: flex; 
		flex-direction: column; 
		justify-content: space-evenly;
		font-family: ${({ theme }) => theme.fontFamily};
		color: ${({ theme }) => theme.colorFont ? theme.colorFont : theme.colorPrimary};
		h3 {
			font-size: 20px; 
			font-weight: ${({ theme }) => theme.fontWeight + 200};
		}

		h4 {
			color: #74798C;
			font-size: 14px; 
			font-weight: ${({ theme }) => theme.fontWeight + 100};
		}
	}
`;


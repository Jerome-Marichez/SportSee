import React, { useEffect } from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




export default function ChartScore() {


	const data2 = [
		{ name: 'Group A', value: 1000 },
	];

	/* 250px height 260px width
	/* since we start at angle 70 max 100% = 360+70*/


	return (
		<CustomScore>
			<div className="title">Score</div>

			<ResponsiveContainer width="100%" height="100%" id="spin">
				<PieChart>
					<Pie
						data={data2}
						cx="50%"
						cy="50%"
						startAngle={70}
						endAngle={360}
						innerRadius={"60%"}
						outerRadius={"70%"}
						dataKey="value"
						cornerRadius={10}
					>

						<Cell stroke="" fill="red" />
					</Pie>
				</PieChart>
			</ResponsiveContainer>

			<div className="bgScore">
				<div className="percentage">58%</div>
				<div className="message">de votre</div>
				<div className="message">objectif</div>
			</div>
		</CustomScore>
	);
}


const CustomScore = styled.div`
		position: relative;
		background: ${({ theme }) => theme.bgContainerColor}; 
		border-radius: 5px;
		
		height: 250px;
		width: 260px;
		opacity: 0.9;


		.title {
			position: absolute;
			margin-top: 24px;
			margin-left: 24px;

			font-family: ${({ theme }) => theme.fontFamily};
			font-size: 15px; 
			font-weight: ${({ theme }) => theme.fontWeight + 200};
		}


		.bgScore {
			display: flex;
			flex-direction: column;
   			align-items: center;
   			justify-content: center;
			gap: 5px;
			position: absolute;
			content: "";
			width: 55%;
			height: 60%;
			top: 50%;
  			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			z-index: -1;
			background-color: ${({ theme }) => theme.bgColor};

			.percentage { 
				font-family: ${({ theme }) => theme.fontFamily};
				font-size: 26px; 
				font-weight: ${({ theme }) => theme.fontWeight + 200};
			}

			
			.message { 
				
				font-family: ${({ theme }) => theme.fontFamily};
				font-size: 16px; 
				font-weight: ${({ theme }) => theme.fontWeight + 100};
				opacity: 0.6;
				

			}
		}
`; 
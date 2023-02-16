import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * @param score as a number between 0.00 & 1.00
 * @example <ChartScore score={0.12} />
 * @returns A component who display a Chart Score Radial with %
 */

export default function ChartScore({ score }: { score: number }) {


	const data = [
		{ name: 'Score', value: score * 100 },
	];

	console.log(score);
	return (
		<CustomScore>
			<div className="title">Score</div>

			<ResponsiveContainer width="100%" height="100%" id="spin">
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						startAngle={70}
						endAngle={430 * score + 70}
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
				<div className="percentage">{score * 100}%</div>
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
		
		height: 263px;
		min-width: 240px;
		
		opacity: 0.9;


		.title {
			position: absolute;
			margin-top: 24px;
			margin-left: 24px;

			color: ${({ theme }) => theme.colorPrimary};
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

			width: 150px;
			height: 150px;
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
				color: ${({ theme }) => theme.colorPrimary};
			}

			
			.message { 
				
				font-family: ${({ theme }) => theme.fontFamily};
				font-size: 16px; 
				font-weight: ${({ theme }) => theme.fontWeight + 100};
				color: ${({ theme }) => theme.colorPrimary};
				opacity: 0.6;
			}
		}
`; 
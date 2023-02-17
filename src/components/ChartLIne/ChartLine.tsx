import React from "react";
import styled from "styled-components";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';


/**
 * 
 * @param data a Array of object 
 * 
 * @example <ChartLine data={[{day: "2020-07-01", kilogram: 80, calories: 240}]}/>
 * @returns A component who display a ChartLine average time session in minutes (XAxis) and day as legend
 */
export default function ChartLine({data}) {

	return (
		<CustomLine>
			<div className="title">
				Durée moyenne des sessions
			</div>
			<ResponsiveContainer width="100%" height="100%">

				<LineChart data={data} margin={{ bottom: 10 }} >

					<Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"
						strokeWidth={2.5} dot={false}
					/>

					<XAxis dataKey="sessionLength" />

					<Tooltip cursor={false}
						wrapperStyle={{ outline: "none", fontWeight: 600 }}
						labelFormatter={value => `${value} min`}
					/>

				</LineChart>

			</ResponsiveContainer>


			<div className="legend">
				<p>L</p>
				<p>M</p>
				<p>M</p>
				<p>J</p>
				<p>V</p>
				<p>S</p>
				<p>D</p>
			</div>

		</CustomLine>
	)
}


const CustomLine = styled.div`
		display:flex;
		flex-direction: column;
		position:relative;
		background: ${({ theme }) => theme.colorThird}; 
		border-radius: 5px;
		
		height: 263px;
		min-width: 240px;

		opacity: 0.9;

		
		font-family: ${({ theme }) => theme.fontFamily};
		font-size: 12px; 
		font-weight: ${({ theme }) => theme.fontWeight};
		

		&:before {
			content: "";
			
   			width: 30%;
    			height: 100%;
			
			background-color: black; 
			opacity: 0.1;
			position: absolute;
			right: 0; 

		}


		.title {
			color: ${({ theme }) => theme.colorSecondary};
			font-weight: ${({ theme }) => theme.fontWeight};
			padding-top: 30px;
			padding-left: 30px;
			font-size: 15px;
			max-width: 200px;
			line-height: 24px;
		}

	
		.legend { 
			display: flex;
			padding-bottom: 25px;
			justify-content: space-between;
			padding-left: 10px;
			padding-right: 10px;	
			p {		
				
				color: ${({ theme }) => theme.colorSecondary};
				font-weight: ${({ theme }) => theme.fontWeight};
			}
		}


		.recharts-tooltip-item-list,.xAxis {
			display: none;
		}
`; 
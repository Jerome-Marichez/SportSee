import React from "react";
import styled from "styled-components";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';


export default function ChartLine() {
	const data = [
		{
			day: 'L',
			time: 40,

		},
		{
			day: 'M',
			time: 20,

		},
		{
			day: 'M',
			time: 30,

		},
		{
			day: 'J',
			time: 10,

		},
		{
			day: 'V',
			time: 68,

		},
		{
			day: 'S',
			time: 30,

		},
		{
			day: 'D',
			time: 120,

		},
	];


	return (
		<CustomLine>
			<div className="title">
				Durée moyenne des sessions
			</div>
			<ResponsiveContainer width="100%" height="100%">

				<LineChart data={data} margin={{ bottom: 10 }} >

					<Line type="monotone" dataKey="time" stroke="#FFFFFF"
						strokeWidth={2.5} dot={false}
					/>
					
					<XAxis dataKey="time" />

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
		
		min-height: 260px;
		min-width: 260px;
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
			max-width: 70%;
			opacity: 0.5;
			line-height: 24px;
		}

	
		.legend { 
			display: flex;
			padding-bottom: 25px;
			justify-content: space-around;
			p {		
				opacity: 0.5;
				color: ${({ theme }) => theme.colorSecondary};
				font-weight: ${({ theme }) => theme.fontWeight};
			}
		}


		.recharts-tooltip-item-list,.xAxis {
			display: none;
		}
`; 
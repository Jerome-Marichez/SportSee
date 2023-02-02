import React from "react";
import styled from "styled-components";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


export default function ChartRadar() {
	const data = [
		{
			subject: 'Intensité',
			A: 120,
			B: 110,
		},
		{
			subject: 'Vitesse',
			A: 98,
			B: 130,
		},
		{
			subject: 'Force',
			A: 86,
			B: 130,
		},
		{
			subject: 'Endurance',
			A: 99,
			B: 100,
		},
		{
			subject: 'Energie',
			A: 85,
			B: 90,
		},
		{
			subject: 'Cardio',
			A: 65,
			B: 85,
		},
	];

	const polarGrid: boolean = false;

	return (
		<CustomRadar>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="66%" data={data}>
					<PolarGrid radialLines={polarGrid} />
					<PolarAngleAxis dataKey="subject" dy={4} tickSize={15} />

					<Radar name="performance" dataKey="A" fill="red" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</CustomRadar>
	)
}


const CustomRadar = styled.div`
		display:flex;
		background: ${({ theme }) => theme.colorPrimary}; 
		border-radius: 5px;
		
		height: 263px;
		min-width: 260px;

		
		opacity: 0.9;

		tspan,.tspan {
			text-align: left;
			position:absolute;
			margin-top: 10%;
			font-family: ${({ theme }) => theme.fontFamily};
			font-size: 12px; 
			font-weight: ${({ theme }) => theme.fontWeight};
			fill: ${({ theme }) => theme.colorSecondary}; 	
		}
`; 
import React from "react";
import styled from "styled-components";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * @param data a Array of object 
 * 
 * @example <ChartRader data={[{value: 80, kind: 'cardio'}]}/>
 * @returns A component who display a ChartRadar with each value & legend kind propriety
 */

export default function ChartRadar({data}) {
	
	const polarGrid: boolean = false;

	return (
		<CustomRadar>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="66%" data={data}>
					<PolarGrid radialLines={polarGrid} />
					<PolarAngleAxis dataKey="kind" dy={4} tickSize={15} />

					<Radar name="performance" dataKey="value" fill="red" fillOpacity={0.7} />
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
		min-width: 240px;

		
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
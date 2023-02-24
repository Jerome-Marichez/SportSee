import React from "react";
import styled from "styled-components";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';



/**
 * 
 * @param data a Array of object 
 * 
 * @example <ChartBar  data={[{day: "2020-07-01", kilogram: 80, calories: 240}]}/>
 * @returns A component who display a ChartBar with a bar (kilogram & calories) per each item providen.
 */
export default function ChartBar({data} : { data: Array<object> }) {
	
	return (
		<Container>
			<div className="flex-head">
				<div className="text-chart">Activité quotidienne</div>
				<div className="text-chart">
					<div className="legend">Poids (kg)</div>
					<div className="legend">Calories brûlées (kCal)</div>
				</div>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="2 2" horizontal={true}
						vertical={false} />
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis orientation="right" axisLine={false} tickLine={false} />

					<Tooltip
						offset={40}
						wrapperStyle={{ outline: "none", fontWeight: 600 }}
						content={<CustomTooltip />}
					/>
					<Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
						barSize={10} />
					<Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
						barSize={10} />
				</BarChart>
			</ResponsiveContainer>
		</Container>
	)
}

const CustomTooltip = (data: any) => {
	try {
		let kg = data.payload[0]['value'];
		let kCal = data.payload[1]['value'];

		return (
			<div className="custom-tooltip">
				<p className="label">{`${kg}kg`}</p>
				<p className="label">{`${kCal}Kcal`}</p>
			</div>
		);
	}
	catch {
		return null;
	}
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	
	height: 320px;
	width: 100%;

	background-color: ${({ theme }) => theme.bgContainerColor};
	font-family: ${({ theme }) => theme.fontFamily};
	font-weight: ${({ theme }) => theme.fontWeight + 100};
	padding: 30px;
	opacity: 0.9;

	.flex-head { 
		display: flex; 
		flex-direction: row;
		justify-content: space-between;	
		padding-bottom: 30px;
	}
	
	.text-chart {
	
		font-size: 15px; 
		display: flex;
		flex-direction: row;
		gap: 20px;
		color: ${({ theme }) => theme.colorFont ? theme.colorFont : theme.colorPrimary};

		.legend { 
			margin-right: 10px;
			font-size: 14px;
			
			&:before {
				 display: inline-flex;
				content: "";
				width: 8px;
				height: 8px;
				margin-right: 10px;
				border-radius: 5px;
				background-color: black;
				
			}
			
			&:nth-child(2):before {
					background-color: ${({ theme }) => theme.colorThird};
			}

			
		}

		
	}

	.custom-tooltip { 
		background-color: ${({ theme }) => theme.colorThird};
		font-size: 10px;
		color: ${({ theme }) => theme.colorSecondary};
		height: 80px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	
	}



	
	
	

`;





import React from "react";
import styled from "styled-components";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
	ResponsiveContainer,
} from 'recharts';


const data = [
	{
		name: '1',
		weight: 69,
		calories: 300,
	},
	{
		name: '2',
		weight: 69.2,
		calories: 200,
	},
	{
		name: '3',
		weight: 70,
		calories: 700,
	},
	{
		name: '4',
		weight: 69.5,
		calories: 500,
	},
	{
		name: '5',
		weight: 70,
		calories: 300,
	},
	{
		name: '6',
		weight: 71,
		calories: 400,
	},
	{
		name: '7',
		weight: 70,
		calories: 1000,
	},
	{
		name: '8',
		weight: 70.5,
		calories: 100,
	},
	{
		name: '9',
		weight: 71,
		calories: 500,
	},
];

const CustomTooltip = (data: any) => {

	let kg = "";
	let kCal = "";

	try {
		kg = data.payload[0]['value'];
		kCal = data.payload[1]['value'];
	}
	catch {
		return null;
	}


	return (
		<div className="custom-tooltip">
			<p className="label">{`${kg}kg`}</p>
			<p className="label">{`${kCal}Kcal`}</p>
		</div>
	);
};

export default function ChartBar() {

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
				<BarChart
					data={data}
				>
					<CartesianGrid strokeDasharray="2 2" horizontal={true}
						vertical={false} />
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis orientation="right" axisLine={false} tickLine={false} />

					<Tooltip
						offset={40}
						wrapperStyle={{ outline: "none", fontWeight: 600 }}
						content={<CustomTooltip />}
					/>
					<Bar dataKey="weight" name="kg" fill="black" radius={[10, 10, 0, 0]}
						barSize={10} />
					<Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
						barSize={10} />
				</BarChart>
			</ResponsiveContainer>
		</Container>
	)
}

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
		color: ${({ theme }) => theme.colorPrimary};

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
				background-color: : ${({ theme }) => theme.colorPrimary};
				
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





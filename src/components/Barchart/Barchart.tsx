import { ThreadMember } from "discord.js";
import React from "react";
import styled from "styled-components";


export default function BarChart() {

	return (
		<Container>
			<FlexHead>

				<TitleChart></TitleChart>
				<div>
					<Legend></Legend>
					<LegendColor></LegendColor>
				</div>
			</FlexHead>
		</Container>)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgContainerColor}}
	`;

const FlexHead = styled.div`
	display: flex; 
	flex-direction: row;
	`
const TitleChart = styled.div`
	`;

const Legend = styled.div`
	`;

const LegendColor = styled(Legend)`
	`;


import React from "react";
import styled from "styled-components";


export default function ChartBar() {

	return (
		<Container>
			<div className="flex-head">

				<div className="title-chart"></div>
				<div>
					<div className="legend"></div>
					<div className="legend-color"></div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bgContainerColor}}
	
	.flex-head { 
		display: flex; 
		flex-direction: row;
	}
	
	.title-chart {

	}

	.legend { 

	}

	.legend-color { 

	}
`;





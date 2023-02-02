import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html,
* {

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}


body {
	background-color: ${({ theme }) => theme.bgColor};
}


.main-container { 
	background-color: inherit;
	padding-top: 90px;
	margin-left: 210px; 
	margin-top: 50px;
	margin-right: 90px;
	margin-bottom: 88px;
}


.home-container {
	display:flex;
	flex-direction:row;
	gap: 30px;
	justify-content: flex-start;
	flex-wrap: wrap;
	
	.left-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 60%;
		
	}


	.right-container { 
		display: flex;
		flex-direction: column;
		gap: 39px;
		width: 30%;
	} 

	
	.cards-container { 
		justify-content: space-around;
		display: flex;
		flex-direction: row;
		gap: 30px;
		flex-wrap: wrap;

		> div {
			flex-basis: 31%

		}
	}
}



`;
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
	display: flex;
	flex-direction: column;
	background-color: inherit;
	margin-left: 224px; 
	margin-top: 69px;
	margin-right: 90px;
	margin-bottom: 88px;
}
		
.margin-top-77 {
	 margin-top: 77px;
}

.cards-container { 
	display: flex;
	flex-direction: row;
	gap: 30px;
	flex-wrap: wrap;
}
`;
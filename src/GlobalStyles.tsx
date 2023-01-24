import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html,
* {

	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 0.15s;
}


body {
	background-color: ${({ theme }) => theme.bgColor};
}`;
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html,
* {

	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 0.15s;
}

.margin-top-72 {
	 margin-top: 77px;
}
body {
	background-color: ${({ theme }) => theme.bgColor};
}`;
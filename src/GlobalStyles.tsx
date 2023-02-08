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
	margin-top: 140px;
	margin-left: 210px; 

	margin-right: 90px;
	margin-bottom: 88px;

	@media screen and (max-width: 1000px) {
		margin-top: 120px;
		margin-left: 10px; 
		margin-right: 10px;
		margin-bottom: 40px;

	}
}


.home-container {
	display:flex;
	flex-direction:row;
	gap: 30px;
	justify-content: flex-start;
	flex-wrap: wrap;
	
	@media screen and (max-width: 1400px) {
		flex-direction: column-reverse;
	}

	.left-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 75%;
		
		@media screen and (max-width: 1400px) {
			width: 100%;
		}
	}


	.right-container { 
		display: flex;
		flex-direction: column;
		gap: 39px;
		width: 20%;

		@media screen and (max-width: 1400px) {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 30px;
		}
	
	} 

	
	.cards-container { 
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		gap: 30px;
		flex-wrap: nowrap;

		> div {
			width: 100%;
		
		}

		@media screen and (min-width: 1400px) {
				flex-direction: row;

		}
	}
}


.loading {
    display: flex;
    flex-direction: row;
    gap: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    
    .cercle { 
	background-color: black;
	width: 50px;
	height: 50px;
	border-radius: 150px;
	animation: opacity 1s infinite alternate forwards;
	
    }
    
    @keyframes opacity {
  	from {
  	 opacity: 1;
	 translateX: 50;
  	}

  	to {
   	 opacity: 0;
 	}
    }

}

`;
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
		margin-left: 10px; 
		margin-right: 10px;
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

.error {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: ${({ theme }) => theme.colorPrimary};
}

.theme-btn { 
	z-index:1;
	cursor: pointer;
	font-size: 40px;
	position: fixed;
	bottom: 10px;
	right: 5px;
	background-color: none;
	user-select: none;
}

.loading {
    display: flex;
    flex-direction: row;
    gap: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: ${({ theme }) => theme.colorPrimary};
    &:after { 
	content: ".";
	font-size: 220px;
	animation: load 0.5s infinite  forwards;
	
    }
    
    @keyframes load {
  	30% {
  	 opacity: 0.5;
	  content: ".";
  	}

  	60% {
	  content: "..";
   	
 	}

	100% {
		content: "...";
	}
    }

}

`;
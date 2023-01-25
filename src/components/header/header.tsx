import React from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';


export default function Header() {

	return (
		<HeaderSportSee>
			<nav>
				<ul>
					<li><img alt="logo" src={logo} /></li>
					<li>Accueil</li>
					<li>Profil</li>
					<li>Réglage</li>
					<li>Communauté</li>
				</ul>
			</nav>
		</HeaderSportSee>
	);
}

const HeaderSportSee = styled.header`
		background-color: ${({ theme }) => theme.colorPrimary};
		color: ${({ theme }) => theme.colorSecondary};

		ul {
			display:flex;
			justify-content:space-between;
		}

		li {
			display: flex;
			align-items: center;
			min-height: 91px;

			font-family: ${({ theme }) => theme.fontFamily}; 
			font-weight: ${({ theme }) => theme.fontWeight};
			font-size: 24px;

			cursor: pointer;

			&:first-child {
				padding-left: 28px;
			}
			&:last-child { 
				padding-right: 87px;
		}
		
	}
`;



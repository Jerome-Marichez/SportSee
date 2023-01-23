import React from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';
import * as global from "../global"; 


const HeaderSportSee = styled.header`
    background-color: ${global.colorPrimary};
    color: ${global.colorSecondary};
`;

const Ul = styled.ul`
display:flex;
justify-content:space-between;
`; 

const Li = styled.li`
display: flex;
align-items: center;
min-height: 91px;

font-family: ${global.fontFamily}; 
font-weight: ${global.fontWeight};
font-size: 24px;

cursor: pointer;

&:first-child {
	padding-left: 28px;
}
&:last-child { 
	padding-right: 87px;
}
`; 


export default function Header() {

	return (
		<HeaderSportSee>
			<nav>
				<Ul>
					<Li><img alt="logo" src={logo} /></Li>
					<Li>Accueil</Li>
					<Li>Profil</Li>
					<Li>Réglage</Li>
					<Li>Communauté</Li>
				</Ul>
			</nav>
		</HeaderSportSee>
	);
}
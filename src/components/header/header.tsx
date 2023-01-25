import React from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';





export default function Header() {

	const HeaderSportSee = styled.header`
		background-color: ${({ theme }) => theme.colorPrimary};
		color: ${({ theme }) => theme.colorSecondary};
	`;

	const Ul = styled.ul`
		display:flex;
		justify-content:space-between;
	`;

	const Li = styled.li`
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
	`;

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
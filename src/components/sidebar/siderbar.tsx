import React from 'react';
import styled from 'styled-components';

import meditation from "./mediatation.svg";
import swim from "./swim.svg";
import bike from "./bike.svg";
import bodyBuilding from "./bodybuilding.svg";



export default function Sidebar() {

	const SidebarSportSee = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	z-index: -1;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	justify-content: center;
	
	height: 100%;
	background-color: ${({ theme }) => theme.colorPrimary}; 
	
	width: 117px;
	`;

	const ContainerIcon = styled.div`
	display:flex;
	justify-content: center;

	width: 64px;
	height: 64px;

	border-radius: 6px;
	background-color: ${({ theme }) => theme.colorSecondary}; 
	cursor: pointer;
	`;

	const Copyright = styled.div`
	position: absolute;
	bottom: 120px;
	width: 150px;
	transform: rotate(270deg);

	font-family:  ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: ${({ theme }) => theme.fontWeight};
	font-size: 12px;
	
	color: ${({ theme }) => theme.colorSecondary}
	`;

	return (
		<SidebarSportSee>
			<ContainerIcon><img src={meditation}></img></ContainerIcon>
			<ContainerIcon><img src={swim}></img></ContainerIcon>
			<ContainerIcon><img src={bike}></img></ContainerIcon>
			<ContainerIcon><img src={bodyBuilding}></img></ContainerIcon>
			<Copyright>Copyright, SportSee 2020</Copyright>
		</SidebarSportSee>
	);
}
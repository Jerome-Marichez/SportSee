import React from 'react';
import styled from 'styled-components';
import * as global from "../global";

import meditation from "./mediatation.svg";
import swim from "./swim.svg";
import bike from "./bike.svg";
import bodyBuilding from "./bodybuilding.svg";


const SidebarSportSee = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    background-color: ${global.colorPrimary}; 
    width: 117px;
`;

const ContainerIcon = styled.div`
	display:flex;
	justify-content: center;
	gap: 20px;
	width: 64px;
	height: 64px;

	border-radius: 6px;
	background-color: ${global.colorSecondary}; 
	cursor: pointer;
`;


export default function Sidebar() {

	return (
		<SidebarSportSee>
			<ContainerIcon><img src={meditation}></img></ContainerIcon>
			<ContainerIcon><img src={swim}></img></ContainerIcon>
			<ContainerIcon><img src={bike}></img></ContainerIcon>
			<ContainerIcon><img src={bodyBuilding}></img></ContainerIcon>
		</SidebarSportSee>
	);
}
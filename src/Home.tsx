import React, { useState, useEffect, MouseEvent } from "react";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import useDarkMode from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./components/themes"


import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Siderbar";
import Title from "./components/Title/Title";
import ChartBar from "./components/ChartBar/ChartBar";
import ChartRadar from "./components/ChartRadar/ChartRadar"; 

const DashboardContainer = styled.div`
		display: flex;
		flex-direction: column;
		background-color: inherit;
		margin-left: 224px; 
		margin-top: 69px;
		margin-right: 90px;
		margin-bottom: 86px;
	`;

export default function Home() {
	const [theme, themeToggler] = useDarkMode();

	return (
		<ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header />
				<DashboardContainer>
					<Title text="Bonjour" textColor="Thomas" subText={"Félicitation ! Vous avez explosé vos objectifs hier 👏"} />
					<div className="margin-top-77"/>
				</DashboardContainer>
				
				<SideBar />

				{/* 
				Create the button design at the end of the project
				<button onClick={themeToggler}></button> */}
			</>
		</ThemeProvider>
	);
};


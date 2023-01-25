import React, { useState, useEffect, MouseEvent } from "react";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import useDarkMode from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./components/themes"


import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Siderbar";
import Title from "./components/Title/Title";

export default function Home() {
	const [theme, themeToggler] = useDarkMode();

	const Margin = ({ px } : { px: number }) => {
		const Margin = styled.div`margin-top: ${px}px;`;
		return (<Margin />);
	}

	const DashboardContainer = styled.div`
		display: flex;
		background-color: inherit;
		margin-left: 224px; 
		margin-top: 69px;
		margin-right: 90px;
		margin-bottom: 86px;
	`;


	return (
		<ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header />
				<DashboardContainer>
					<Title title="Bonjour" titleColor="Thomas" subTitle={"Félicitation ! Vous avez explosé vos objectifs hier 👏"} />
					<Margin px={72} />
					<BarChart/>
				</DashboardContainer>
				<SideBar />

				{/* 
				Create the button design at the end of the project
				<button onClick={themeToggler}></button> */}
			</>
		</ThemeProvider>
	);
};


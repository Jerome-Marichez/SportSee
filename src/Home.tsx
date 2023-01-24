import React, { useState, useEffect, MouseEvent } from "react";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import useDarkMode from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./components/Themes"


import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Siderbar";

export default function Home() {
	const [theme, themeToggler] = useDarkMode();

	const DashboardContainer = styled.div`
		position:absolute;
		background-color: inherit;
		margin-left: 224px; 
		margin-top: 69px;
		margin-right: 90px;
		margin-bottom: 86px;
	`;

	const Title = styled.div`
		font-family:  ${({ theme }) => theme.fontFamily};
		font-style: bold;
		font-weight: 600;
		font-family:  ${({ theme }) => theme.fontWeight};
		font-size: 48px;
	`;

	const TitleColor = styled(Title)`
		color: ${({ theme }) => theme.colorThird};
	`;

	return (
		<ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header />
				<DashboardContainer>
					<Title>Bonjour </Title><TitleColor>Thomas</TitleColor>
				</DashboardContainer>
				<SideBar />
				<button onClick={themeToggler}>Switch Theme</button>
			</>
		</ThemeProvider>
	);
};


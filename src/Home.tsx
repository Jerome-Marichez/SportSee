import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import useDarkMode from "./hooks/useDarkMode";
import useData from "./hooks/useData";
import { lightTheme, darkTheme } from "./components/themes"

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Siderbar";
import Title from "./components/Title/Title";

import ChartBar from "./components/ChartBar/CharBar";
import ChartRadar from "./components/ChartRadar/ChartRadar";
import ChartScore from "./components/ChartScore/ChartScore";
import ChartLine from "./components/ChartLine/ChartLine";
import CardStat from "./components/CardStat/Stats";


export default function Home() {
	const [theme, themeToggler] = useDarkMode();

	const [data, loading, error] = useData(12);
	console.log(data);


	return (
		<ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header />
				{loading ?
					<div className="loading"></div>
					:
					<div className="main-container">
						<Title text="Bonjour" textColor={data?.["userInfos"]['firstName']} subText={"Félicitation ! Vous avez explosé vos objectifs hier 👏"} />

						<div className="home-container">
							<div className="left-container">
								<ChartBar data={data?.["sessionsWeight"]} />
								<div className="cards-container">
									<ChartRadar />
									<ChartScore score={data?.["todayScore"]} />
									<ChartLine data={data?.["sessionsLength"]} />
								</div>
							</div>

							<div className="right-container">
								<CardStat type="Calories" weight={data?.['keyData']['calorieCount']} />
								<CardStat type="Proteines" weight={data?.['keyData']['proteinCount']} />
								<CardStat type="Glucides" weight={data?.['keyData']['carbohydrateCount']} />
								<CardStat type="Lipides" weight={data?.['keyData']['lipidCount']} />
							</div>
						</div>

					</div>}

				<SideBar />

				{/* 
				Create the button design at the end of the project
				<button onClick={themeToggler}></button> */}
			</>
		</ThemeProvider>
	);
};


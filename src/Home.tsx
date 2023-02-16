import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./components/themes"

import useDarkMode from "./hooks/useDarkMode";
import useData from "./hooks/useData";
import { useSearchParams } from "react-router-dom";

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

	const [searchParams] = useSearchParams();
	const id: string | null = searchParams.get("id");
	const userID: number = id ? parseInt(id) : 0;

	const [data, loading, error] = useData(userID);


	return (
		<ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Header />
				<div className="theme-btn" onClick={themeToggler}>{theme ? "🌞" : "🌜"}</div>
				{loading ?

					<div className="loading"></div>

					: error ? <div className="error">Error user doesn't exists or SportSee is down :(</div> :
						<div className="main-container">
							<Title text="Bonjour" textColor={data["userInfos"]['firstName']} subText={"Félicitation ! Vous avez explosé vos objectifs hier 👏"} />

							<div className="home-container">

								<div className="left-container">
									<ChartBar data={data["sessionsWeight"]} />
									<div className="cards-container">
										<ChartRadar data={data["data"]} />
										<ChartScore score={data["todayScore"]} />
										<ChartLine data={data["sessionsLength"]} />
									</div>
								</div>

								<div className="right-container">
									<CardStat type="Calories" weight={data['keyData']['calorieCount']} />
									<CardStat type="Proteines" weight={data['keyData']['proteinCount']} />
									<CardStat type="Glucides" weight={data['keyData']['carbohydrateCount']} />
									<CardStat type="Lipides" weight={data['keyData']['lipidCount']} />
								</div>
							</div>

						</div>}

				<SideBar />
			</>
		</ThemeProvider>
	);
};


import { useEffect, useState } from "react";
import mockupData from "../../mockup.json";
import formatData from "../utils/formatData";

/**
 * 
 * @param userID the ID Number of the user to fetch Data
 * @param ENV_PROD a boolean true to fetch from External API, false to fetch from local MockUp
 * 
 * @example const [data, loading, error] = useData(12);
 * In a tsx code {loading ? "" : data?.["userInfos"]['firstName']}
 * 
 * @returns A custom hook with 3 state [data,loading,error]
 * 
 * loading = a boolean with state set to True if the data are loading false if data are loaded
 * 
 * error = a boolean with state set to false if no error true if any error (One API is break or down)
 * 
 * data = the object with all details fetch by all API which are (sample): 
 * 
 * - data: [{value: 120, kind: "energy"}]
 * - id: 12
 * - keyData: {calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50}
 * - sessionsLength: [{day: 1, sessionLength: 30}]	 
 * - sessionsWeight: [{day: "2020-07-01", kilogram: 80, calories: 240}]
 * - todayScore: 0.12
 * - userID: 12
 * - userInfos: {firstName: "Karl", lastName: "Dovnieau", age: 31}

 */
export default function useData(userID: number, ENV_PROD: boolean = true) {

	const BASE_URL_DEV = "http://localhost:5173/mockup.json"
	const BASE_URL_PROD = "https://sport-see-backend-9li7kmslm-jerome-marichez.vercel.app/user"
	const api_path = ENV_PROD ? BASE_URL_PROD : BASE_URL_DEV;


	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState<object>({});

	useEffect(() => {

		(async () => {
			setLoading(true);
			setError(false);

			try {
				if (ENV_PROD) {
					const userR: Promise<Response> = fetch(`${api_path}/${userID}`);
					const activityR: Promise<Response> = fetch(`${api_path}/${userID}/activity`);
					const avgSessionR: Promise<Response> = fetch(`${api_path}/${userID}/average-sessions`);
					const performanceR: Promise<Response> = fetch(`${api_path}/${userID}/performance`);
					const promises: Promise<Response>[] = [userR, activityR, avgSessionR, performanceR];

					const responses: Response[] = await Promise.all(promises);
					let tmpData: any[] = [];



					for (let response of responses) {
						if (!response.ok) {
							setError(true);
						}
						else {
							const json: JSON = await response.json();
							tmpData.push((json['data']));
						}
					}

					const finalData: object = new formatData(tmpData);
					setData(finalData);
				}
				else {
					let tmpData: any = [];
					mockupData.forEach((data) => {
						if (data['id'] === userID) { tmpData.push(data) }
					})

					if (tmpData[0]['id']) {
						const finalData: object = new formatData(tmpData);
						setData(finalData);
					} else { setError(true); }
				}
			}
			catch {
				setError(true);
			}
			finally {
				setLoading(false);
			}

		})();

	}, [userID])


	return [data,
		loading,
		error
	] as const;

}


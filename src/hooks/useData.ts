import { useEffect, useState } from "react";

/**
 * 
 * @param userID the ID Number of the user to fetch Data
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
 * - data: [{value: 120, kind: 2}]
 * - id: 12
 * - keyData: {calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50}
 * - kind: { "1": "cardio","2": "energy","3": "endurance","4": "strength","5": "speed","6": "intensity"}
 * - sessionLength: [{day: 1, sessionLength: 30}]	 
 * - sessionWeight: [{day: "2020-07-01", kilogram: 80, calories: 240}]
 * - todayScore: 0.12
 * - userID: 12
 * - userInfos: {firstName: "Karl", lastName: "Dovnieau", age: 31}

 */
export default function useData(userID: number) {

	const api_path: string = `http://localhost:3000/user`;

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState<object>();



	useEffect(() => {

		(async () => {
			setLoading(true);
			setError(false);

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


			const finalData = tmpData.reduce((acc, obj) => formatData(acc, obj))
			setData(finalData);

			setLoading(false);
		})();

	}, [userID])


	return [data,
		loading,
		error
	] as const;

}


function formatData(acc, obj) {
	Object.entries(obj).forEach(([key, value]) => {

		if (acc[key] === undefined) {
			acc[key] = value;
		}

		/* avoid double Sessions propriety */
		if (key === "sessions" && typeof value === "object" && value) {
			const isInteger = value[0].day;
			if (!isNaN(isInteger)) {
				acc["sessionLength"] = value;
			}
			else {
				acc["sessionsWeight"] = value;
			}
		}

	});
	return acc;
}
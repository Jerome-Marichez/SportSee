/**
 * @param obj A An array of objects which are the body answer of API requests.
 * @return  A data object composed of a single object with all properties formatted.
 */
export default class formatData {
	constructor(obj: any) {
		const acc = {};

		console.log(typeof obj);
		console.log(obj);


		obj = this.joinObj(obj);
		obj = this.formatKind(obj);

		/* Sometimes todayScore doesn't exist but exists in the score property, so we assign a new property todayScore. */
		if (obj['score']) { obj['todayScore'] = obj['score']; delete obj.score; }

		if (obj['keyData']['calorieCount']) {
			obj['keyData']['calorieCount'] = this.formatCalories(obj['keyData']['calorieCount']);
		}


		return obj;
	}

	/**
	 * 
	 * @param obj A single object with a 'kind' property.
	 * @returns A new object with the 'kind' property replaced by its corresponding French name.
	 */
	formatKind(obj: object): object {
		obj['data'].map(value => {

			if (!isNaN(value['kind'])) {
				if (obj['kind'][value['kind']]) {
					value['kind'] = obj['kind'][value['kind']];
				}
			}

			switch (value['kind']) {
				case "cardio":
					value['kind'] = "Cardio"
					break;
				case "energy":
					value['kind'] = "Energie"
					break;
				case "endurance":
					value['kind'] = "Endurance"
					break;
				case "strength":
					value['kind'] = "Force"
					break;
				case "speed":
					value['kind'] = "Vitesse"
					break;
				case "intensity":
					value['kind'] = "Intensité"
					break;
			}

		})
		if (obj.hasOwnProperty('kind')) { delete obj['kind']; }
		return obj;
	}

	/**
	 * 
	 * @param obj An array of objects.
	 * @returns A new object that merges all the data and avoids duplicate properties.
	 */
	joinObj(obj: any): object {
		obj = obj.reduce((acc, obj) => {
			Object.entries(obj).forEach(([key, value]) => {
				if (acc[key] === undefined) {
					acc[key] = value;
				}

				/* Avoid duplicate 'sessions' property */
				if (key === "sessions" && typeof value === "object" && value) {
					const isInteger = value[0].day;
					if (!isNaN(isInteger)) {
						acc["sessionsLength"] = value;
					}
					else {
						acc["sessionsWeight"] = value;
					}
				}
			});
			return acc; // Return only one object at the end.
		});
		if (obj['sessionsLength'] && obj['sessionsWeight']) { delete obj.sessions; }
		return obj;
	}

	/**
	  * @param weight this is the weight of calories as number
	  * @example formatCalories(1930) -> return 1,930
	  * @returns the weight as a string with a "," after first number
	  */
	formatCalories(weight: number): string {
		const numAsString = weight.toString();
		if (numAsString.indexOf(",") === -1) {
			return numAsString.charAt(0) + "," + numAsString.slice(1, numAsString.length);
		} else {
			return numAsString;
		}
	}

}
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org";

export async function getCurrentWeather(query: string) {
	const parsedQuery = query.replace(/\s/g, "").split(",");
	const url = `${baseUrl}/data/2.5/weather?q=${parsedQuery.join(
		","
	)}&appid=${apiKey}&units=metric`;
	console.log(url);
	try {
		const res = await fetch(url);

		if (!res.ok)
			throw new Error(
				`Could not get current weather. ${res.status} : ${res.statusText}`
			);

		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

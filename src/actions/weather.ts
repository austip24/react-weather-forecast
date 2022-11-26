import type { GeocodingApiResponseItem, LatLng } from "./types";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org";

async function getLatLngForLocation(
	location: string
): Promise<LatLng[] | undefined> {
	const parsedQuery = location.replace(/\s/g, "").split(",");
	const url = `${baseUrl}/geo/1.0/direct?q=${parsedQuery.join(
		","
	)}&appid=${apiKey}&limit=5`;

	try {
		const res = await fetch(url);

		if (!res.ok)
			throw new Error(
				`Could not get location Lat/Lng. ${res.status} : ${res.statusText}`
			);

		const data = (await res.json()) as GeocodingApiResponseItem[];

		return data.map((item) => ({
			lat: item.lat,
			lng: item.lon,
		}));
	} catch (error) {
		console.error(error);
	}
}

export async function getCurrentWeather(query: string) {
	const latLng = await getLatLngForLocation(query);
	console.log(latLng);
	return latLng;
	// const url = `${baseUrl}/data/2.5/weather?q=${parsedQuery.join(
	// 	","
	// )}&appid=${apiKey}&units=metric`;
	// console.log(url);
	// try {
	// 	const res = await fetch(url);

	// 	if (!res.ok)
	// 		throw new Error(
	// 			`Could not get current weather. ${res.status} : ${res.statusText}`
	// 		);

	// 	const data = await res.json();
	// 	return data;
	// } catch (error) {
	// 	console.error(error);
	// }
}

import { ForecastDataResponse } from "./types";
import type {
	CurrentWeatherDataResponse,
	GeocodingApiResponseItem,
} from "./types";

const DEFAULT_LAT = 40.7128;
const DEFAULT_LON = -74.006;

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org";

export async function getGeocodeInfo(
	query: string
): Promise<GeocodingApiResponseItem[] | undefined> {
	if (query.length === 0) return;

	const parsedQuery = query.replace(/\s/g, "").split(",");
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
			...item,
			state: item?.state ?? "",
		}));
	} catch (error) {
		console.error(error);
	}
}

export async function getCurrentWeather(
	location: GeocodingApiResponseItem | null
): Promise<CurrentWeatherDataResponse | undefined> {
	const { lat, lon } = location ?? { lat: DEFAULT_LAT, lon: DEFAULT_LON };
	const url = `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	try {
		const res = await fetch(url);

		if (!res.ok)
			throw new Error(
				`Could not get current weather. ${res.status} : ${res.statusText}`
			);

		const data = (await res.json()) as CurrentWeatherDataResponse;
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getForecast(
	location: GeocodingApiResponseItem | null
): Promise<ForecastDataResponse | undefined> {
	const { lat, lon } = location ?? { lat: DEFAULT_LAT, lon: DEFAULT_LON };
	const url = `${baseUrl}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(
				`Could not get daily forecast. ${res.status} : ${res.statusText}`
			);
		}

		const data = (await res.json()) as ForecastDataResponse;
		return data;
	} catch (error) {
		console.error(error);
	}
}

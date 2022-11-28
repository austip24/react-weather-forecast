export interface LocalName {
	af: string;
	ar: string;
	ascii: string;
	az: string;
	bg: string;
	ca: string;
	da: string;
	de: string;
	el: string;
	en: string;
	eu: string;
	fa: string;
	feature_name: string;
	fi: string;
	fr: string;
	gl: string;
	he: string;
	hi: string;
	hr: string;
	hu: string;
	id: string;
	it: string;
	ja: string;
	la: string;
	lt: string;
	mk: string;
	nl: string;
	no: string;
	pl: string;
	pt: string;
	ro: string;
	ru: string;
	sk: string;
	sl: string;
	sr: string;
	th: string;
	tr: string;
	vi: string;
	zu: string;
}

export interface GeocodingApiResponseItem {
	name: string;
	local_names: LocalName;
	lat: number;
	lon: number;
	country: string;
	state?: string;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
}

export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Daily {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
	clouds: number;
	pop: number;
	rain: number;
	uvi: number;
}

export interface ForecastDataResponse {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	daily: Daily[];
}

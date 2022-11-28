import React, { createContext, useContext, useState } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
	useQuery,
} from "@tanstack/react-query";
import { getForecast } from "../../actions/weather";
import type {
	GeocodingApiResponseItem,
	ForecastDataResponse,
} from "../../actions/types";

interface IWeatherContext {
	forecast: ForecastDataResponse | undefined;
	currentLocation: GeocodingApiResponseItem | null;
	setCurrentLocation: React.Dispatch<
		React.SetStateAction<GeocodingApiResponseItem | null>
	>;
	fetchForecast: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any, unknown>>;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);

export const useWeather = () => useContext(WeatherContext);

interface WeatherProviderProps {
	children: React.ReactNode;
}

export default function WeatherProvider({ children }: WeatherProviderProps) {
	const [currentLocation, setCurrentLocation] =
		useState<GeocodingApiResponseItem | null>(null);

	const { data: forecast, refetch: fetchForecast } = useQuery({
		queryKey: ["dailyForecast", currentLocation],
		queryFn: () => getForecast(currentLocation),
	});

	return (
		<WeatherContext.Provider
			value={{
				forecast,
				fetchForecast,
				currentLocation,
				setCurrentLocation,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
}

import React, { createContext, useContext, useMemo, useState } from "react";
import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
	useQuery,
} from "@tanstack/react-query";
import { getCurrentWeather } from "../../actions/weather";
import {
	CurrentWeatherDataResponse,
	GeocodingApiResponseItem,
} from "../../actions/types";

interface IWeatherContext {
	currentWeatherData: any;
	currentLocation: GeocodingApiResponseItem | null;
	setCurrentLocation: React.Dispatch<
		React.SetStateAction<GeocodingApiResponseItem | null>
	>;
	fetchCurrentWeatherData: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<
		QueryObserverResult<CurrentWeatherDataResponse | undefined, unknown>
	>;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);

export const useWeather = () => useContext(WeatherContext);

interface WeatherProviderProps {
	children: React.ReactNode;
}

export default function WeatherProvider({ children }: WeatherProviderProps) {
	const [currentLocation, setCurrentLocation] =
		useState<GeocodingApiResponseItem | null>(null);

	const { data: currentWeatherData, refetch: fetchCurrentWeatherData } =
		useQuery({
			queryKey: ["currentWeather", currentLocation],
			queryFn: () => {
				return getCurrentWeather(currentLocation);
			},
		});

	return (
		<WeatherContext.Provider
			value={{
				currentWeatherData,
				fetchCurrentWeatherData,
				currentLocation,
				setCurrentLocation,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
}

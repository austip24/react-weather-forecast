import React, { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../actions/weather";

interface IWeatherContext {
	currentWeatherData: any;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);

interface WeatherProviderProps {
	children: React.ReactNode;
}

export const useWeather = () => useContext(WeatherContext);

export default function WeatherProvider({ children }: WeatherProviderProps) {
	const { data: currentWeatherData } = useQuery({
		queryKey: ["currentWeather", "Tucson"],
		queryFn: () => getCurrentWeather("Tucson"),
	});

	return (
		<WeatherContext.Provider value={{ currentWeatherData }}>
			{children}
		</WeatherContext.Provider>
	);
}

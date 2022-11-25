import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const cityCoords = {
	lat: 32.254,
	lng: -110.9742,
};

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCoords.lat}&lon=${cityCoords.lng}&appid=${apiKey}`;

function App() {
	return (
		<div className="min-h-screen h-full flex items-center justify-center flex-col lg:flex-row bg-[#343D4B]">
			<CurrentWeather />
			<WeatherForecast />
		</div>
	);
}

export default App;

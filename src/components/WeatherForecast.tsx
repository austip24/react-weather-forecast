import { useState } from "react";
import SearchModal from "./SearchModal";
import locationIcon from "../assets/location.svg";
import sunnyIcon from "../assets/sunny.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainyIcon from "../assets/rainy.svg";
import { useWeather } from "./providers/WeatherProvider";

function WeatherForecast() {
	const { currentWeatherData } = useWeather();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col justify-around lg:w-[520px] lg:h-[623px] p-[50px] text-white bg-[#222831] rounded-r-[25px]">
			<section className="flex flex-col ml-[5px] mt-[5px] gap-4">
				<div className="flex justify-between text-[28px]">
					<span className="capitalize font-bold">Pressure</span>
					<span className="">{currentWeatherData?.main.pressure} hPa</span>
				</div>
				<div className="flex justify-between text-[28px]">
					<span className="capitalize font-bold">Humidity</span>
					<span>{currentWeatherData?.main.humidity}%</span>
				</div>
				<div className="flex justify-between text-[28px]">
					<span className="capitalize font-bold">Wind</span>
					<span>{(currentWeatherData?.wind.speed * 3600) / 1000} km/h</span>
				</div>
			</section>

			<section className="flex divide-x divide-[#222831]">
				<div className="flex-1 p-3 bg-[#272E37] rounded-[10px] flex flex-col items-center justify-center gap-[15px] cursor-pointer">
					<img src={sunnyIcon} className="w-[52px]" />
					<span className="text-xl">Tue</span>
					<span className="text-xl font-bold">30 &deg;C</span>
				</div>
				<div className="flex-1 p-3 bg-[#272E37] rounded-[10px] flex flex-col items-center justify-center gap-[15px] cursor-pointer">
					<img src={cloudyIcon} className="w-[52px]" />
					<span className="text-xl">Wed</span>
					<span className="text-xl font-bold">22 &deg;C</span>
				</div>
				<div className="flex-1 p-3 bg-[#272E37] rounded-[10px] flex flex-col items-center justify-center gap-[15px] cursor-pointer">
					<img src={rainyIcon} className="w-[52px]" />
					<span className="text-xl">Thu</span>
					<span className="text-xl font-bold">06 &deg;C</span>
				</div>
				<div className="flex-1 p-3 bg-[#272E37] rounded-[10px] flex flex-col items-center justify-center gap-[15px] cursor-pointer">
					<img src={sunnyIcon} className="w-[52px]" />
					<span className="text-xl">Fri</span>
					<span className="text-xl font-bold">26 &deg;C</span>
				</div>
			</section>

			<SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<button
					className="transition-all duration-500 flex justify-center items-center gap-2 w-full mb-[5px] py-[10px] bg-gradient-to-br from-[#90D9E0]/90 bg-size-200 via-[#5460E6]/90 bg-pos-0 hover:bg-pos-100  to-[#5460E6]/90  rounded-[10px]"
					onClick={() => setIsOpen(true)}
				>
					<img
						src={locationIcon}
						alt="Location Icon"
						className="w-[33px] aspect-square"
					/>
					<span className="text-xl font-semibold">Change Location</span>
				</button>
			</SearchModal>
		</div>
	);
}

export default WeatherForecast;

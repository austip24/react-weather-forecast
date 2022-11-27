import locationIcon from "../assets/location.svg";
import sunnyIcon from "../assets/sunny.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainyIcon from "../assets/rainy.svg";
import snowyIcon from "../assets/snowy.svg";
import { useWeather } from "./providers/WeatherProvider";
import { MONTHS, WEEK_DAYS } from "../utils/constants";

function CurrentWeather() {
	const { currentWeatherData } = useWeather();
	const date = new Date();

	const isRainy = (type: string): boolean => {
		return type === "Drizzle" || type === "Thunderstorm" || type === "Rain";
	};

	const isSnowy = (type: string): boolean => {
		return type === "Snow";
	};

	const isCloudy = (type: string): boolean => {
		return type === "Clouds";
	};

	const isSunny = (type: string): boolean => {
		return !isRainy(type) && !isSnowy(type) && !isCloudy(type);
	};

	console.log(currentWeatherData);
	return (
		<div className="flex justify-between items-center w-full lg:items-start gap-24 lg:gap-0 lg:flex-col max-w-[493px] max-h-[666px] lg:h-[666px] text-white px-8 py-12 rounded-[30px] bg-gradient-to-br from-[#88EBEFE5] to-[#535BE6E5]">
			<section className="flex flex-col gap-4">
				<h1 className="text-4xl font-bold">{WEEK_DAYS[date.getDay()]}</h1>
				<h2 className="text-2xl">{`${date.getDate()} ${date.toLocaleString(
					"en-US",
					{ month: "short" }
				)} ${date.getFullYear()}`}</h2>
				<div className="flex gap-2 text-xl font-semibold -mt-1">
					<img
						src={locationIcon}
						alt="Location Icon"
						className="w-[27px] aspect-square"
					/>
					{currentWeatherData?.name}, {currentWeatherData?.sys.country}
				</div>
			</section>
			<section className="flex flex-col items-center lg:items-start gap-4">
				{isSunny(currentWeatherData?.weather[0].main) && (
					<img
						src={sunnyIcon}
						alt="Location Icon"
						className="w-16 lg:w-[95px] aspect-square"
					/>
				)}
				{isRainy(currentWeatherData?.weather[0].main) && (
					<img
						src={rainyIcon}
						alt="Location Icon"
						className="w-16 lg:w-[95px] aspect-square"
					/>
				)}
				{isCloudy(currentWeatherData?.weather[0].main) && (
					<img
						src={cloudyIcon}
						alt="Location Icon"
						className="w-16 lg:w-[95px] aspect-square"
					/>
				)}
				{isSnowy(currentWeatherData?.weather[0].main) && (
					<img
						src={snowyIcon}
						alt="Location Icon"
						className="w-16 lg:w-[95px] aspect-square"
					/>
				)}
				<h1 className="text-2xl lg:text-5xl font-bold">
					{Math.round(currentWeatherData?.main.feels_like)} &deg;C
				</h1>
				<h2 className="text-xl lg:text-3xl font-bold">
					{isRainy(currentWeatherData?.weather[0].main) && "Rainy"}
					{isSunny(currentWeatherData?.weather[0].main) && "Sunny"}
					{isCloudy(currentWeatherData?.weather[0].main) && "Cloudy"}
					{isSnowy(currentWeatherData?.weather[0].main) && "Snowy"}
				</h2>
			</section>
		</div>
	);
}

export default CurrentWeather;

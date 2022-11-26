import CurrentWeather from "./components/CurrentWeather";
import WeatherProvider, {
	useWeather,
} from "./components/providers/WeatherProvider";
import WeatherForecast from "./components/WeatherForecast";

const cityCoords = {
	lat: 32.254,
	lng: -110.9742,
};

function App() {
	return (
		<div className="min-h-screen h-full flex items-center justify-center flex-col lg:flex-row bg-[#343D4B]">
			<WeatherProvider>
				<CurrentWeather />
				<WeatherForecast />
			</WeatherProvider>
		</div>
	);
}

export default App;

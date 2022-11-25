import locationIcon from "../assets/location.svg";
import sunnyIcon from "../assets/sunny.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainyIcon from "../assets/rainy.svg";

function CurrentWeather() {
	return (
		<div className="flex justify-between items-center w-full lg:items-start gap-24 lg:gap-0 lg:flex-col max-w-[493px] max-h-[666px] lg:h-[666px] text-white px-8 py-12 rounded-[30px] bg-gradient-to-br from-[#88EBEFE5] to-[#535BE6E5]">
			<section className="flex flex-col gap-4">
				<h1 className="text-4xl font-bold">Tuesday</h1>
				<h2 className="text-2xl">20 Jun 2022</h2>
				<div className="flex gap-2 text-xl font-semibold -mt-1">
					<img
						src={locationIcon}
						alt="Location Icon"
						className="w-[27px] aspect-square"
					/>
					Biarritz, FR
				</div>
			</section>
			<section className="flex flex-col items-center lg:items-start gap-4">
				<img
					src={sunnyIcon}
					alt="Location Icon"
					className="w-16 lg:w-[95px] aspect-square"
				/>
				<h1 className="text-2xl lg:text-5xl font-bold">29 &deg;C</h1>
				<h2 className="text-xl lg:text-3xl font-bold">Sunny</h2>
			</section>
		</div>
	);
}

export default CurrentWeather;

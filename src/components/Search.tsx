import React, { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { getGeocodeInfo } from "../actions/weather";
import useDebounce from "../hooks/useDebounce";
import type { GeocodingApiResponseItem } from "../actions/types";
import { useWeather } from "./providers/WeatherProvider";

const debounceTimeout = 500;

function Search() {
	const [locations, setLocations] = useState<GeocodingApiResponseItem[]>([]);
	const { currentLocation, setCurrentLocation } = useWeather();
	const [selectedLocation, setSelectedLocation] = useState("");

	const filteredLocations = locations.filter(
		(location) =>
			location.lat !== currentLocation?.lat &&
			location.lon !== currentLocation?.lon
	);

	const handleOnChange = useDebounce<React.ChangeEvent<HTMLInputElement>>(
		async (e) => {
			const geocodeData = await getGeocodeInfo(e.target.value);
			setLocations(geocodeData ?? []);
		},
		debounceTimeout
	);

	return (
		<Combobox
			as="div"
			className="relative"
			value={selectedLocation}
			onChange={setSelectedLocation}
		>
			<Combobox.Input
				onChange={handleOnChange}
				placeholder={"Search for a city"}
				className="w-full p-2 rounded-lg"
			/>
			<Combobox.Options
				className={`${
					filteredLocations.length > 0 && "p-1"
				} absolute flex flex-col gap-1 mt-1 w-full rounded-md bg-white`}
			>
				{filteredLocations.map((location, idx) => (
					<Combobox.Option
						as="button"
						key={`${location.name}, ${location.state}, ${location.country}`}
						value={idx}
						className="w-full text-left rounded-md px-2 py-1 hover:bg-[#535BE6]/40 cursor-pointer"
						onClick={() => setCurrentLocation(location)}
					>
						{`${location.name}, ${location.state}, ${location.country}`}
					</Combobox.Option>
				))}
			</Combobox.Options>
		</Combobox>
	);
}

export default Search;

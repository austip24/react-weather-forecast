import React, { useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

interface SearchProps {
	onSearchChange: (data: string) => Promise<void>;
	debounceTimeout: number;
}

function Search({ onSearchChange, debounceTimeout }: SearchProps) {
	const inputRef = useRef(null);

	const handleOnChange = useDebounce<React.ChangeEvent<HTMLInputElement>>(
		async (e) => {
			await onSearchChange(e.target.value);
		},
		debounceTimeout
	);

	return (
		<input
			ref={inputRef}
			className="w-full"
			placeholder="Search for city"
			onChange={handleOnChange}
		/>
	);
}

export default Search;

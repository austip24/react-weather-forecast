export const isRainy = (type: string): boolean => {
	return type === "Drizzle" || type === "Thunderstorm" || type === "Rain";
};

export const isSnowy = (type: string): boolean => {
	return type === "Snow";
};

export const isCloudy = (type: string): boolean => {
	return type === "Clouds";
};

export const isSunny = (type: string): boolean => {
	return !isRainy(type) && !isSnowy(type) && !isCloudy(type);
};

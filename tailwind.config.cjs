/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundSize: {
				"size-200": "200% 200%",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
			inset: {
				"neg-2": "-2px",
			},
		},
	},
	plugins: [],
};

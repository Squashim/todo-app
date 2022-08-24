/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(220, 98%, 61%)",
				checkBg: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
				lightGray100: "hsl(0, 0%, 98%)",
				lightGray200: "hsl(236, 33%, 92%)",
				lightGray300: "hsl(233, 11%, 84%)",
				lightGray400: "hsl(236, 9%, 61%)",
				lightGray500: "hsl(235, 19%, 35%)",
				darkGray100: "hsl(235, 21%, 11%)",
				darkGray200: "hsl(235, 24%, 19%)",
				darkGray300: "hsl(234, 39%, 85%)",
				darkGray300Hover: "hsl(236, 33%, 92%)",
				darkGray500: "hsl(234, 11%, 52%)",
				darkGray600: "hsl(233, 14%, 35%)",
				darkGray700: "hsl(237, 14%, 26%)",
			},
		},
	},
	plugins: [],
};

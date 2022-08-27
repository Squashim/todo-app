/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				desktop: "425px",
			},
			colors: {
				primary: "hsl(220, 98%, 61%)",
				gradientFrom: "hsl(192, 100%, 67%)",
				gradientTo: "hsl(280, 87%, 65%)",

				lightGray100: "hsl(0, 0%, 98%)",
				lightGray200: "hsl(236, 33%, 92%)",
				lightGray300: "hsl(233, 11%, 84%)",
				lightGray400: "hsl(236, 9%, 61%)",
				lightGray500: "hsl(235, 19%, 35%)",

				darkGrayBg: "#181824",
				darkGrayTodoBg: "#25273c",
				darkInputText: "#54566b",
				darkText: "#898ba2",
				darkElements: "#3c3e55",

				darkGrayText: "hsl(234, 39%, 85%)",
				darkGray300Hover: "hsl(236, 33%, 92%)",
				darkGray400: "hsl(234, 11%, 52%)",
				darkGray500: "hsl(233, 14%, 35%)",
				darkGray600: "hsl(237, 14%, 26%)",
			},
		},
	},
	plugins: [],
};

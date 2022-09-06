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

				bgMain: "var(--bg-main)",
				bgTodo: "var(--bg-todo)",
				textColor: "var(--text)",
				hoverColor: "var(--hover)",
				elementsColor: "var(--elements)",
				shadowColor: "var(--shadow)",
			},
		},
	},
	plugins: [],
};

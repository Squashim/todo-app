import React from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

export const ThemeChanger = ({ mode, setMode }) => {
	const toggleDarkMode = () => {
		if (mode) {
			document.documentElement.classList.add("dark");
			setMode((current) => (current = !current));
		}
		if (!mode) {
			document.documentElement.classList.remove("dark");
			setMode((current) => (current = !current));
		}
	};
	return (
		<div className='' onClick={() => toggleDarkMode()}>
			{mode ? <img src={sun} alt='' /> : <img src={moon} alt='' />}
		</div>
	);
};

export default ThemeChanger;

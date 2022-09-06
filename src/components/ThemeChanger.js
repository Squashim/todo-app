import React from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

export const ThemeChanger = ({ theme, setTheme }) => {
	const toggleDarkMode = () => {
		if (theme === "light-theme") {
			localStorage.setItem("theme", "dark-theme");
			setTheme("dark-theme");
		} else {
			localStorage.setItem("theme", "light-theme");
			setTheme("light-theme");
		}
	};
	return (
		<div
			className='cursor-pointer hover:scale-110 duration-100 ease'
			onClick={() => toggleDarkMode()}>
			{theme === "dark-theme" ? (
				<img src={sun} alt='' />
			) : (
				<img src={moon} alt='' />
			)}
		</div>
	);
};

export default ThemeChanger;

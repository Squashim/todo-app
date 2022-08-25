import React, { useState } from "react";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

const Header = () => {
	const [mode, setMode] = useState(true);
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
		<div
			className={
				'w-full h-[200px] bg-[url("./assets/bg-mobile-light.jpg")] bg-no-repeat bg-center bg-cover'
			}>
			<div className='flex items-center w-full justify-between px-8 pt-12'>
				<h1 className='uppercase text-[26px] tracking-[12px] font-bold text-lightGray100  '>
					todo
				</h1>
				<div className='' onClick={() => toggleDarkMode()}>
					{mode ? <img src={sun} alt='' /> : <img src={moon} alt='' />}
				</div>
			</div>
		</div>
	);
};

export default Header;

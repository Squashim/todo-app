import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
	const [mode, setMode] = useState(true);

	return (
		<div
			className={
				mode
					? 'w-full h-[200px] desktop:bg-[url("./assets/bg-desktop-light.jpg")] bg-[url("./assets/bg-mobile-light.jpg")] bg-no-repeat bg-center bg-cover'
					: 'w-full h-[200px] desktop:bg-[url("./assets/bg-desktop-dark.jpg")] bg-[url("./assets/bg-mobile-dark.jpg")] bg-no-repeat bg-center bg-cover'
			}>
			<div className='flex items-center w-full justify-between px-6 pt-12 max-w-[550px] mx-auto'>
				<h1 className='sm:text-3xl uppercase text-[26px] tracking-[12px] font-bold text-lightGray100  '>
					todo
				</h1>
				<ThemeChanger mode={mode} setMode={setMode} />
			</div>
		</div>
	);
};

export default Header;

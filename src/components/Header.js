import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
	const [mode, setMode] = useState(true);

	return (
		<div
			className={
				'w-full h-[200px] bg-[url("./assets/bg-mobile-light.jpg")] bg-no-repeat bg-center bg-cover'
			}>
			<div className='flex items-center w-full justify-between px-6 pt-12'>
				<h1 className='uppercase text-[26px] tracking-[12px] font-bold text-lightGray100  '>
					todo
				</h1>
				<ThemeChanger mode={mode} setMode={setMode} />
			</div>
		</div>
	);
};

export default Header;

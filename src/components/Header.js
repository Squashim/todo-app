import React from "react";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
	return (
		<div className='w-full h-[200px] bg-[url("./assets/bg-mobile-light.jpg")] bg-no-repeat bg-center bg-cover'>
			<div className='flex items-center w-full justify-between px-8 pt-12'>
				<h1 className='uppercase text-3xl tracking-[12px] font-bold text-lightGray100 dark:text-black '>
					todo
				</h1>
				<ThemeChanger />
			</div>
		</div>
	);
};

export default Header;

import React from "react";

const Footer = () => {
	return (
		<footer className=' max-w-[550px] mx-auto text-xs w-full text-center text-textColor mt-10'>
			Challenge by{" "}
			<a
				href='https://www.frontendmentor.io?ref=challenge'
				rel='noopener'
				target='_blank'
				className='text-primary'>
				Frontend Mentor
			</a>
			. Coded by{" "}
			<a href='https://github.com/Squashim' className='text-primary'>
				Squashim
			</a>
			.
		</footer>
	);
};

export default Footer;

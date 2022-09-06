import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	useEffect(() => {
		if (theme === "light-theme") {
			document.body.classList.add("light-theme");
			document.body.classList.remove("dark-theme");
		} else {
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		}
	}, [theme]);

	return (
		<>
			<Header theme={theme} setTheme={setTheme} />
			<Main />
			<Footer />
		</>
	);
};

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TodoList from "../components/TodoList";

const Home = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	useEffect(() => {
		if (theme === "light-theme") {
			document.body.classList.add("light-theme");
		} else {
			document.body.classList.add("dark-theme");
		}
	}, [theme]);

	return (
		<>
			<Header theme={theme} setTheme={setTheme} />
			<TodoList />
			<Footer />
		</>
	);
};

export default Home;

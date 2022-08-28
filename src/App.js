//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className='transition-all duration-500 ease scroll-smooth w-full h-screen dark:bg-darkGrayBg bg-lightGray200 overflow-y-scroll'>
			<Header />
			<TodoList />
			<Footer />
		</div>
	);
}

export default App;

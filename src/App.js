//Components
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className='w-full h-screen dark:bg-darkGrayBg bg-lightGray200 overflow-y-scroll'>
			<Header />
			<TodoList />
		</div>
	);
}

export default App;

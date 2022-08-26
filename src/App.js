import Header from "./components/Header";

import circle from "./assets/icon-check.svg";
import close from "./assets/icon-cross.svg";

function App() {
	return (
		<div className='w-full h-screen dark:bg-darkGrayBg bg-lightGray100'>
			<Header />

			<div className='w-full h-[80vh] flex flex-col p-6 items-center justify-between mt-[-100px]'>
				{/* Todo Input */}
				<div className='flex items-center w-full max-h-[50px] h-full dark:bg-darkGrayTodoBg rounded-md px-6'>
					<div className='w-[20px] h-[20px] rounded-full border-[1px] dark:border-darkElements mr-4'></div>
					<form>
						<input
							type='text'
							placeholder='Create a new todo...'
							className='caret-primary bg-transparent text-sm dark:text-darkGrayText dark:placeholder:text-darkInputText border-none outline-none'
						/>
					</form>
				</div>

				{/* Todos list */}
				<div className='flex flex-col justify-center w-full  h-full '>
					<div className='flex items-center h-full max-h-[50px] dark:bg-darkGrayTodoBg px-6  '>
						<div
							className='cursor-pointer w-[20px] h-[20px] relative my-auto  rounded-[10px] border-[1px]dark:border-darkElements  mr-4 dark:bg-darkElements hover:bg-gradient-to-br from-gradientFrom to-gradientTo
						before:content-[""] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:absolute   before:top-[1px] before:left-[1px] before:bg-darkGrayTodoBg box-border before:rounded-[9px]'></div>

						<p className='text-sm my-auto dark:text-darkGrayText'>
							Complete online JavaScript course
						</p>
					</div>
				</div>
				<div className=''></div>
			</div>
		</div>
	);
}

export default App;

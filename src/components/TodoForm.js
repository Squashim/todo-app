import React, { useState } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};
	return (
		<div className='flex items-center w-full min-h-[50px] mb-4 h-full bg-lightGray100 dark:bg-darkGrayTodoBg rounded-md px-4'>
			<div className='min-w-[20px] min-h-[20px] rounded-full border-[1px] border-lightGray300 dark:border-darkElements mr-4'></div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='text'
					onChange={handleChange}
					value={input}
					placeholder='Create a new todo...'
					className='caret-primary bg-transparent text-sm dark:text-darkGrayText  text-lightGray500 placeholder:text-lightGray400 dark:placeholder:text-darkInputText border-none outline-none'
				/>
			</form>
		</div>
	);
};

export default TodoForm;

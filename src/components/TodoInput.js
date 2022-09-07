import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newValue = {
			id: Math.floor(Math.random() * 10000),
			text: text,
			isCompleted: false,
		};
		addTodo(newValue);
		setText("");
	};
	return (
		<div className=' flex items-center w-full min-h-[50px] mb-4 h-full bg-bgTodo rounded-md px-4'>
			<div className='min-w-[20px] min-h-[20px] rounded-full border-[1px] border-elementsColor mr-4'></div>
			<form onSubmit={handleSubmit} className='w-full'>
				<input
					maxLength={30}
					type='text'
					name='text'
					onChange={(e) => setText(e.target.value)}
					value={text}
					placeholder='Create a new todo...'
					className='sm:text-lg placeholder:sm:text-lg w-full caret-primary bg-transparent text-sm text-textColor placeholder:text-elementsColor border-none outline-none'
				/>
			</form>
		</div>
	);
};

export default TodoInput;

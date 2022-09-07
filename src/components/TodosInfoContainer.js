import React from "react";

const TodosInfoContainer = ({ todos, clearCompleted }) => {
	const getItemsLeft = () => {
		let completedTodos = 0;
		let total = todos.length;
		completedTodos = todos.filter((todo) => todo.isCompleted).length;
		return total - completedTodos;
	};
	return (
		<div className='shadow-shadowColor shadow-xl  flex items-center h-full min-h-[50px] bg-bgTodo px-4 w-full rounded-b-md'>
			<div className='sm:text-lg text-xs text-secondaryTextColor flex items-center justify-between w-full'>
				<p>{`${getItemsLeft()} items left`}</p>
				<p
					onClick={clearCompleted}
					className='cursor-pointer hover:text-hoverColor'>
					Clear Completed
				</p>
			</div>
		</div>
	);
};

export default TodosInfoContainer;

import React from "react";

const TodosInfoContainer = ({ todos, filter, clearCompleted }) => {
	return (
		<div className='shadow-shadowColor shadow-xl  flex items-center h-full min-h-[50px] bg-bgTodo px-4 w-full rounded-b-md'>
			<div className='sm:text-lg text-xs text-secondaryTextColor flex items-center justify-between w-full'>
				<p>
					{todos.length === 0
						? "No items left"
						: filter === "all"
						? `${todos.length} items left`
						: filter === "active"
						? `${todos.filter((todo) => !todo.isCompleted).length} items left`
						: `${todos.filter((todo) => todo.isCompleted).length} items left`}
				</p>
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

import React from "react";

const TodosInfoContainer = ({ todos, clearCompleted, filterList }) => {
	const getItemsLeft = () => {
		let completedTodos = 0;
		let total = todos.length;
		completedTodos = todos.filter((todo) => todo.isCompleted).length;
		return total - completedTodos;
	};
	return (
		<div className='shadow-shadowColor shadow-xl  flex items-center h-full min-h-[50px] bg-bgTodo px-4 w-full rounded-b-md'>
			<div className='sm:text-[16px] text-xs text-secondaryTextColor flex items-center justify-between w-full'>
				<p className='w-1/3'>{`${getItemsLeft()} items left`}</p>
				<div className='w-1/3 hidden sm:flex items-center justify-end gap-4'>
					{filterList}
				</div>
				<p
					onClick={clearCompleted}
					className='w-1/3 cursor-pointer hover:text-hoverColor text-right'>
					Clear Completed
				</p>
			</div>
		</div>
	);
};

export default TodosInfoContainer;

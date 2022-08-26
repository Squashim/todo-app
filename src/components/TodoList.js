import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removedArr);
	};

	const clearCompleted = () => {
		const removedArr = [...todos].filter((todo) => todo.isComplete !== true);
		setTodos(removedArr);
	};

	return (
		<>
			<div className='w-full flex flex-col p-6 items-center mt-[-115px]'>
				<TodoForm onSubmit={addTodo} />
				<div className='w-full h-full'>
					<Todo
						todos={todos}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
					<div className='flex items-center h-full min-h-[50px] bg-lightGray100 dark:bg-darkGrayTodoBg px-4 border-b border-b-lightGray300 dark:border-b-darkInputText w-full rounded-b-md'>
						<div className='text-xs text-lightGray400 dark:text-darkInputText flex items-center justify-between w-full'>
							<p>{todos.length} items left</p>
							<p
								onClick={clearCompleted}
								className='cursor-pointer hover:dark:text-darkGray300Hover hover:text-lightGray500'>
								Clear Completed
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoList;

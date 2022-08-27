import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [filter, setFilter] = useState("all");

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

	const showAll = () => {
		console.log(todos);
		console.log(filteredTodos);
		setFilter("all");
	};

	const showActive = () => {};
	const showCompleted = () => {};
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
					<div className='dark:shadow-black/50 shadow-xl flex items-center h-full min-h-[50px] bg-lightGray100 dark:bg-darkGrayTodoBg px-4 w-full rounded-b-md'>
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

				<div className='dark:shadow-black/50 shadow-2xl min-h-[50px] mt-4 justify-center w-full flex items-center bg-lightGray100 dark:bg-darkGrayTodoBg px-4 rounded-md gap-3'>
					<button
						onClick={showAll}
						className={
							filter === "all"
								? "font-bold   cursor-pointer text-sm  text-primary"
								: "font-bold hover:text-lightGray500 dark:hover:text-darkGray300Hover cursor-pointer text-sm dark:text-darkInputText text-lightGray400"
						}>
						All
					</button>
					<button
						onClick={showActive}
						className={
							filter === "active"
								? "font-bold   cursor-pointer text-sm  text-primary"
								: "font-bold hover:text-lightGray500 dark:hover:text-darkGray300Hover cursor-pointer text-sm dark:text-darkInputText text-lightGray400"
						}>
						Active
					</button>
					<button
						onClick={showCompleted}
						className={
							filter === "completed"
								? "font-bold   cursor-pointer text-sm  text-primary"
								: "font-bold hover:text-lightGray500 dark:hover:text-darkGray300Hover cursor-pointer text-sm dark:text-darkInputText text-lightGray400"
						}>
						Completed
					</button>
				</div>

				<p className='px-4 w-full text-center text-sm dark:text-darkInputText text-lightGray400 mt-10'>
					Drag and drop to reorder list
				</p>
			</div>
		</>
	);
};

export default TodoList;

import React, { useState } from "react";
import { useEffect } from "react";
import FilterContainer from "./FilterContainer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosInfoContainer from "./TodosInfoContainer";

const Main = () => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todoList")) || []
	);

	const [filter, setFilter] = useState(
		JSON.parse(localStorage.getItem("filter")) || "all"
	);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		localStorage.setItem("todoList", JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});
		localStorage.setItem("todoList", JSON.stringify(updatedTodos));
		setTodos(updatedTodos);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);
		localStorage.setItem("todoList", JSON.stringify(removedArr));
		setTodos(removedArr);
	};

	const clearCompleted = () => {
		const removedArr = [...todos].filter((todo) => todo.isCompleted !== true);
		localStorage.setItem("todoList", JSON.stringify(removedArr));
		setTodos(removedArr);
	};

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		let list;
		switch (filter) {
			case "all":
				list = [...todos];
				const [reorderedList] = list.splice(result.source.index, 1);
				list.splice(result.destination.index, 0, reorderedList);
				localStorage.setItem("todoList", JSON.stringify(list));
				setTodos(list);
				break;
			default:
				return;
		}
	};

	return (
		<main className='max-w-[550px] mx-auto w-full flex flex-col p-6 items-center mt-[-115px] '>
			{/* Todos input */}
			<TodoInput onSubmit={addTodo} />

			{/* Todos list */}
			{filter === "all" ? (
				<TodoList
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					handleOnDragEnd={handleOnDragEnd}
				/>
			) : filter === "active" ? (
				<TodoList
					todos={todos.filter((todo) => !todo.isCompleted)}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					handleOnDragEnd={handleOnDragEnd}
				/>
			) : (
				<TodoList
					todos={todos.filter((todo) => todo.isCompleted)}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					handleOnDragEnd={handleOnDragEnd}
				/>
			)}

			{/* Todos info */}
			<TodosInfoContainer
				todos={todos}
				filter={filter}
				clearCompleted={clearCompleted}
			/>

			{/* Filter container */}
			<FilterContainer filter={filter} setFilter={setFilter} />
		</main>
	);
};

export default Main;

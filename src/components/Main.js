import React, { useState } from "react";
import { useEffect } from "react";
import FilterContainer from "./FilterContainer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosInfoContainer from "./TodosInfoContainer";
import templateTodos from "../data/template.json";

const Main = () => {
	const MY_TASKS = localStorage.getItem("todoList")
		? JSON.parse(localStorage.getItem("todoList"))
		: [...templateTodos];
	const [todos, setTodos] = useState(MY_TASKS);

	const [filter, setFilter] = useState(
		JSON.parse(localStorage.getItem("filter")) || "all"
	);

	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		setTodos((todos) => [...todos, todo]);
	};

	const completeTodo = (id) => {
		const newList = [...todos];
		const editTodo = newList.find((todo) => todo.id === id);
		if (editTodo) {
			editTodo.isCompleted = !editTodo.isCompleted;
		}
		setTodos(newList);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removedArr);
	};

	const clearCompleted = () => {
		const removedArr = [...todos].filter((todo) => !todo.isCompleted);
		setTodos(removedArr);
	};

	const updateFilter = (selected) => {
		setFilter(selected);
	};

	const updateTodos = (updatedList) => {
		setTodos(updatedList);
	};

	return (
		<main className='max-w-[550px] mx-auto w-full flex flex-col p-6 items-center mt-[-115px] '>
			{/* Todos input */}
			<TodoInput addTodo={addTodo} />

			{/* Todos list */}
			<TodoList
				todos={todos}
				completeTodo={completeTodo}
				updateTodos={updateTodos}
				removeTodo={removeTodo}
				filter={filter}
				clearCompleted={clearCompleted}
			/>

			{/* Todos info */}
			<TodosInfoContainer todos={todos} clearCompleted={clearCompleted} />

			{/* Filter container */}
			<FilterContainer filter={filter} updateFilter={updateFilter} />
		</main>
	);
};

export default Main;

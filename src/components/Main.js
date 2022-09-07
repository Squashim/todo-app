import React, { useState } from "react";
import { useEffect } from "react";
import FilterContainer from "./FilterContainer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosInfoContainer from "./TodosInfoContainer";
import templateTodos from "../data/template.json";
import FilterButton from "./FilterButton";

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

	const FILTER_MAP = {
		all: () => true,
		active: (todo) => !todo.isComplete,
		completed: (todo) => todo.isComplete,
	};

	const FILTER_NAMES = Object.keys(FILTER_MAP);

	const filterList = FILTER_NAMES.map((name) => (
		<FilterButton
			key={name}
			name={name}
			updateFilter={updateFilter}
			isPressed={name === filter}
		/>
	));

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

			{/* Bottom panel */}
			<div className='flex flex-col sm:hidden w-full'>
				<TodosInfoContainer todos={todos} clearCompleted={clearCompleted} />
				<FilterContainer filterList={filterList} />
			</div>

			<div className='sm:flex hidden w-full'>
				<TodosInfoContainer
					todos={todos}
					clearCompleted={clearCompleted}
					filterList={filterList}
				/>
			</div>
			<p className='px-4 w-full text-center sm:text-base text-sm text-elementsColor mt-10'>
				Drag and drop to reorder list
			</p>
		</main>
	);
};

export default Main;

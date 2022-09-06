import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import FilterButton from "./FilterButton";
import FilterContainer from "./FilterContainer";
import Placeholder from "./Placeholder";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const FILTER_MAP = {
	all: () => true,
	active: (todo) => !todo.isComplete,
	completed: (todo) => todo.isComplete,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoList = () => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todoList")) || []
	);

	const [filter, setFilter] = useState("all");

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
		const list = [...todos];
		const [reorderedList] = list.splice(result.source.index, 1);
		list.splice(result.destination.index, 0, reorderedList);
		setTodos(list);
	};

	return (
		<main className='max-w-[550px] mx-auto w-full flex flex-col p-6 items-center mt-[-115px] '>
			{/* Todos input */}
			<TodoInput onSubmit={addTodo} />

			{/* Todos list */}
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId='todo'>
					{(provided) => (
						<div
							className='w-full h-full'
							{...provided.droppableProps}
							ref={provided.innerRef}>
							{todos.filter(FILTER_MAP[filter]).length === 0 ? (
								<Placeholder filter={filter} />
							) : (
								<Todo
									filter={filter}
									todos={todos}
									completeTodo={completeTodo}
									removeTodo={removeTodo}
									FILTER_MAP={FILTER_MAP}
								/>
							)}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>

			{/* Todos info */}
			<div className=' shadow-shadowColor shadow-xl flex items-center h-full min-h-[50px] bg-bgTodo px-4 w-full rounded-b-md'>
				<div className='sm:text-lg text-xs text-textColor flex items-center justify-between w-full'>
					<p>
						{todos.filter(FILTER_MAP[filter]).length === 0
							? "No items left"
							: `${todos.filter(FILTER_MAP[filter]).length} items left`}
					</p>
					<p
						onClick={clearCompleted}
						className='cursor-pointer hover:text-hoverColor'>
						Clear Completed
					</p>
				</div>
			</div>

			{/* Filter container */}
			{/* <FilterContainer /> */}
		</main>
	);
};

export default TodoList;

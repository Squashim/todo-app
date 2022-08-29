import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import FilterButton from "./FilterButton";
import Placeholder from "./Placeholder";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const FILTER_MAP = {
	all: () => true,
	active: (todo) => !todo.isComplete,
	completed: (todo) => todo.isComplete,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		localStorage.setItem("todos", JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos")));
	}, []);

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removedArr);
		localStorage.setItem("todos", JSON.stringify(removedArr));
	};

	const clearCompleted = () => {
		const removedArr = [...todos].filter((todo) => todo.isComplete !== true);
		setTodos(removedArr);
		localStorage.setItem("todos", JSON.stringify(removedArr));
	};

	const filterList = FILTER_NAMES.map((name) => (
		<FilterButton
			key={name}
			name={name}
			setFilter={setFilter}
			isPressed={name === filter}
		/>
	));

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const list = [...todos];
		const [reorderedList] = list.splice(result.source.index, 1);
		console.log(list);
		list.splice(result.destination.index, 0, reorderedList);

		setTodos(list);
	};

	return (
		<div className='max-w-[550px] mx-auto w-full flex flex-col p-6 items-center mt-[-115px] '>
			{/* Todos input */}
			<TodoForm onSubmit={addTodo} />

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
			<div className='dark:shadow-black/50 shadow-xl flex items-center h-full min-h-[50px] bg-lightGray100 dark:bg-darkGrayTodoBg px-4 w-full rounded-b-md'>
				<div className='sm:text-lg text-xs text-lightGray400 dark:text-darkInputText flex items-center justify-between w-full'>
					<p>
						{todos.filter(FILTER_MAP[filter]).length === 0
							? "No items left"
							: `${todos.filter(FILTER_MAP[filter]).length} items left`}
					</p>
					<p
						onClick={clearCompleted}
						className='cursor-pointer hover:dark:text-darkGray300Hover hover:text-lightGray500'>
						Clear Completed
					</p>
				</div>
			</div>

			{/* Filter buttons */}
			<div className='dark:shadow-black/50 shadow-2xl min-h-[50px] mt-4 justify-center w-full flex items-center bg-lightGray100 dark:bg-darkGrayTodoBg px-4 rounded-md gap-3 '>
				{filterList}
			</div>

			<p className='px-4 w-full text-center sm:text-base text-sm dark:text-darkInputText text-lightGray400 mt-10'>
				Drag and drop to reorder list
			</p>
		</div>
	);
};

export default TodoList;

import React from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TodoList = ({ todos, updateTodos, filter, completeTodo, removeTodo }) => {
	const renderedList = todos.map(({ id, text, isCompleted }, index) => {
		return (
			<Todo
				key={id}
				index={index}
				id={id}
				text={text}
				removeTodo={removeTodo}
				completeTodo={completeTodo}
				isCompleted={isCompleted}
			/>
		);
	});

	const renderedListActive = todos.map(({ id, text, isCompleted }, index) => {
		if (isCompleted) return "";
		return (
			<Todo
				key={id}
				index={index}
				id={id}
				text={text}
				removeTodo={removeTodo}
				completeTodo={completeTodo}
				isCompleted={isCompleted}
			/>
		);
	});

	const renderedListCompleted = todos.map(
		({ id, text, isCompleted }, index) => {
			if (!isCompleted) return "";
			return (
				<Todo
					key={id}
					index={index}
					id={id}
					text={text}
					removeTodo={removeTodo}
					completeTodo={completeTodo}
					isCompleted={isCompleted}
				/>
			);
		}
	);

	const renderedFilteredList = () => {
		if (filter === "active") return renderedListActive;
		else if (filter === "completed") return renderedListCompleted;
		else return renderedList;
	};

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const updatedList = Array.from(todos);
		const [reorderedItem] = updatedList.splice(result.source.index, 1);
		updatedList.splice(result.destination.index, 0, reorderedItem);
		updateTodos(updatedList);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='list'>
				{(provided) => (
					<div
						className='w-full h-full'
						{...provided.droppableProps}
						ref={provided.innerRef}>
						{renderedFilteredList()}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default TodoList;

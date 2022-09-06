import React from "react";
import Placeholder from "./Placeholder";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TodoList = ({ todos, completeTodo, removeTodo, handleOnDragEnd }) => {
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='todo'>
				{(provided) => (
					<div
						className='w-full h-full'
						{...provided.droppableProps}
						ref={provided.innerRef}>
						{todos.length === 0 ? (
							<Placeholder />
						) : (
							<Todo
								todos={todos}
								completeTodo={completeTodo}
								removeTodo={removeTodo}
							/>
						)}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default TodoList;

// : filter === "active" ? (
//     	<DragDropContext onDragEnd={handleOnDragEnd}>
//     		<Droppable droppableId='todo'>
//     			{(provided) => (
//     				<div
//     					className='w-full h-full'
//     					{...provided.droppableProps}
//     					ref={provided.innerRef}>
//     					{todos.filter((todo) => !todo.isCompleted).length === 0 ? (
//     						<Placeholder filter={filter} />
//     					) : (
//     						<Todo
//     							todos={todos.filter((todo) => !todo.isCompleted)}
//     							completeTodo={completeTodo}
//     							removeTodo={removeTodo}
//     						/>
//     					)}
//     					{provided.placeholder}
//     				</div>
//     			)}
//     		</Droppable>
//     	</DragDropContext>
//     ) : (
//     	<DragDropContext onDragEnd={handleOnDragEnd}>
//     		<Droppable droppableId='todo'>
//     			{(provided) => (
//     				<div
//     					className='w-full h-full'
//     					{...provided.droppableProps}
//     					ref={provided.innerRef}>
//     					{todos.filter((todo) => todo.isCompleted).length === 0 ? (
//     						<Placeholder filter={filter} />
//     					) : (
//     						<Todo
//     							todos={todos.filter((todo) => todo.isCompleted)}
//     							completeTodo={completeTodo}
//     							removeTodo={removeTodo}
//     						/>
//     					)}
//     					{provided.placeholder}
//     				</div>
//     			)}
//     		</Droppable>
//     	</DragDropContext>
//     );

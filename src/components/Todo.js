import React from "react";
import close from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ todos, completeTodo, removeTodo }) => {
	return todos.map((todo, index) => (
		<Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className=' flex items-center h-full min-h-[50px] bg-bgTodo px-4 border-b border-b-elementsColor w-full first:rounded-t-md'>
					<div className='w-full h-full flex items-center'>
						{/* Circle */}
						<div
							onClick={
								todo.isCompleted ? undefined : () => completeTodo(todo.id)
							}
							className={
								todo.isCompleted
									? "min-w-[22px] min-h-[22px] flex items-center justify-center rounded-full bg-gradient-to-br from-gradientFrom to-gradientTo mr-4"
									: "flex items-center justify-center rounded-full cursor-pointer min-w-[22px] min-h-[22px] mr-4 bg-elementsColor hover:bg-gradient-to-br from-gradientFrom to-gradientTo"
							}>
							{todo.isCompleted ? (
								<img src={check} alt='' />
							) : (
								<div className='bg-bgTodo rounded-full w-[20px] h-[20px] '></div>
							)}
						</div>
						{/* Text */}
						<div
							className={
								todo.isCompleted
									? "sm:text-lg text-xs my-auto text-elementsColor decoration-elementsColor line-through"
									: "sm:text-lg cursor-pointer text-xs my-auto text-textColor"
							}>
							{todo.text}
						</div>
						{/* Close */}
						<div
							className='mr-0 ml-auto cursor-pointer '
							onClick={() => removeTodo(todo.id)}>
							<img src={close} alt='' className='w-[16px] h-[16px]' />
						</div>
					</div>
				</div>
			)}
		</Draggable>
	));
};

export default Todo;

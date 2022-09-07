import React from "react";
import close from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const Todo = ({ index, id, isCompleted, completeTodo, removeTodo, text }) => {
	const [completed, setCompleted] = useState(isCompleted);

	const updateItemStatus = (id) => {
		completeTodo(id);
		setCompleted(!completed);
	};

	return (
		<Draggable key={id} draggableId={id.toString()} index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					id={id}
					key={id}
					ref={provided.innerRef}
					className=' flex items-center h-full min-h-[50px] bg-bgTodo px-4 border-b border-b-elementsColor w-full first:rounded-t-md'>
					<div className='w-full h-full flex items-center'>
						{/* Circle */}
						<div
							onClick={isCompleted ? undefined : () => updateItemStatus(id)}
							className={
								isCompleted
									? "min-w-[22px] min-h-[22px] flex items-center justify-center rounded-full bg-gradient-to-br from-gradientFrom to-gradientTo mr-4"
									: "flex items-center justify-center rounded-full cursor-pointer min-w-[22px] min-h-[22px] mr-4 bg-elementsColor hover:bg-gradient-to-br from-gradientFrom to-gradientTo"
							}>
							{isCompleted ? (
								<img src={check} alt='' />
							) : (
								<div className='bg-bgTodo rounded-full w-[20px] h-[20px] '></div>
							)}
						</div>
						{/* Text */}
						<div
							className={
								isCompleted
									? "sm:text-lg text-xs my-auto text-elementsColor decoration-elementsColor line-through"
									: "sm:text-lg cursor-pointer text-xs my-auto text-textColor"
							}>
							{text}
						</div>
						{/* Close */}
						<div
							className='mr-0 ml-auto cursor-pointer '
							onClick={() => removeTodo(id)}>
							<img src={close} alt='' className='w-[16px] h-[16px]' />
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Todo;

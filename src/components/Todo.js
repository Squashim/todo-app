import React from "react";
import close from "../assets/icon-cross.svg";
import check from "../assets/icon-check.svg";

const Todo = ({ todos, completeTodo, removeTodo, filter, FILTER_MAP }) => {
	return todos.filter(FILTER_MAP[filter]).map((todo, index) => (
		<div
			key={index}
			className='flex items-center h-full min-h-[50px] bg-lightGray100 dark:bg-darkGrayTodoBg px-4 border-b border-b-lightGray300 dark:border-b-darkInputText w-full first:rounded-t-md'>
			<div key={todo.id} className='w-full h-full flex items-center'>
				{/* Circle */}
				<div
					onClick={todo.isComplete ? undefined : () => completeTodo(todo.id)}
					className={
						todo.isComplete
							? "min-w-[20px] min-h-[20px] flex items-center justify-center rounded-full bg-gradient-to-br from-gradientFrom to-gradientTo mr-4"
							: "flex items-center justify-center rounded-full cursor-pointer min-w-[20px] min-h-[20px] mr-4 bg-lightGray300 dark:bg-darkElements hover:bg-gradient-to-br from-gradientFrom to-gradientTo"
					}>
					{todo.isComplete ? (
						<img src={check} alt='' />
					) : (
						<div className=' bg-lightGray100 dark:bg-darkGrayTodoBg rounded-full w-[19px] h-[19px] '></div>
					)}
				</div>
				{/* Text */}
				<div
					className={
						todo.isComplete
							? "text-xs my-auto text-lightGray300 decoration-lightGray400 line-through dark:text-darkGray500 dark:decoration-darkGray400"
							: "cursor-pointer text-xs my-auto text-lightGray500 dark:text-darkGrayText"
					}>
					{todo.text}
				</div>
				{/* Close */}
				<div
					className='mr-0 ml-auto cursor-pointer '
					onClick={() => removeTodo(todo.id)}>
					<img src={close} alt='' className='w-[14px] h-[14px]' />
				</div>
			</div>
		</div>
	));
};

export default Todo;

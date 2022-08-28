import React from "react";

const Placeholder = ({ filter }) => {
	return (
		<div className='text-center w-full bg-lightGray100 dark:bg-darkGrayTodoBg rounded-t-md p-4'>
			<h2 className='sm:text-3xl text-2xl sm:my-2 text-lightGray500 dark:text-darkGrayText'>
				{filter === "all"
					? "No tasks found!"
					: filter === "active"
					? "No active tasks found!"
					: "No completed tasks found!"}
			</h2>
			<p className='text-lightGray500 dark:text-darkGrayText sm:text-base mt-2 text-xs'>
				{filter === "all"
					? "Add a new one..."
					: filter === "active"
					? "You don't have active tasks..."
					: "You don't have completed tasks..."}
			</p>
		</div>
	);
};

export default Placeholder;

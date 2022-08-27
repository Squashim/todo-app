import React from "react";

const FilterButton = ({ name, isPressed, setFilter }) => {
	return (
		<button
			onClick={() => setFilter(name)}
			className={
				isPressed
					? "capitalize font-bold cursor-pointer text-sm  text-primary"
					: "capitalize font-bold hover:text-lightGray500 dark:hover:text-darkGray300Hover cursor-pointer text-sm dark:text-darkInputText text-lightGray400"
			}>
			{name}
		</button>
	);
};

export default FilterButton;

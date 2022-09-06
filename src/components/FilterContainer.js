import React from "react";
import FilterButton from "./FilterButton";

const FilterContainer = ({ filter, setFilter }) => {
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
			setFilter={setFilter}
			isPressed={name === filter}
		/>
	));
	return (
		<>
			<div className='shadow-shadowColor shadow-xl min-h-[50px] mt-4 justify-center w-full flex items-center bg-bgTodo px-4 rounded-md gap-3 '>
				{filterList}
			</div>
			<p className='px-4 w-full text-center sm:text-base text-sm text-elementsColor mt-10'>
				Drag and drop to reorder list
			</p>
		</>
	);
};

export default FilterContainer;

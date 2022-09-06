import React from "react";

const FilterContainer = () => {
	// const filterList = FILTER_NAMES.map((name) => (
	// 	<FilterButton
	// 		key={name}
	// 		name={name}
	// 		setFilter={setFilter}
	// 		isPressed={name === filter}
	// 	/>
	// ));
	return (
		<>
			<div className='dark:shadow-black/50 shadow-2xl min-h-[50px] mt-4 justify-center w-full flex items-center bg-lightGray100 dark:bg-darkGrayTodoBg px-4 rounded-md gap-3 '>
				{/* {filterList} */}
			</div>
			<p className='px-4 w-full text-center sm:text-base text-sm dark:text-darkInputText text-lightGray400 mt-10'>
				Drag and drop to reorder list
			</p>
		</>
	);
};

export default FilterContainer;

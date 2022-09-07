import React from "react";

const FilterContainer = ({ filterList }) => {
	return (
		<div className='shadow-shadowColor shadow-xl min-h-[50px] mt-4 justify-center w-full flex items-center bg-bgTodo px-4 rounded-md gap-4'>
			{filterList}
		</div>
	);
};

export default FilterContainer;

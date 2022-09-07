import React from "react";

const FilterButton = ({ name, isPressed, updateFilter }) => {
	return (
		<button
			onClick={() => updateFilter(name)}
			className={
				isPressed
					? "sm:text-lg capitalize font-bold cursor-pointer text-sm  text-primary"
					: "sm:text-lg capitalize font-bold hover:text-textColor cursor-pointer text-sm text-secondaryTextColor"
			}>
			{name}
		</button>
	);
};

export default FilterButton;

import { StyledSearchBar } from "./SearchBar.styled";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = React.forwardRef(({ handleSubmit }, ref) => {
	return (
		<StyledSearchBar onSubmit={handleSubmit}>
			<input ref={ref} type="text" />
			<button>
				<AiOutlineSearch />
			</button>
		</StyledSearchBar>
	);
});

export default SearchBar;

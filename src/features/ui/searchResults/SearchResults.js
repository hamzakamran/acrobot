import { StyledSearchResults } from "./SearchResults.styled";
import { AiFillDislike, AiFillFlag, AiFillLike } from "react-icons/ai";

const SearchResults = ({
	addLike,
	removeLike,
	reportSearch,
	addDefinition,
	search,
	results,
}) => {
	return (
		<StyledSearchResults>
			<h4>
				Don't see what you're looking for?{" "}
				<span onClick={addDefinition} className="fakeLink">
					Add a new definition.
				</span>
			</h4>
			{results?.definitions?.map((result) => (
				<li key={`${results.acronym}-${result.definition}`}>
					<div>
						{result?.definition}
						<AiFillFlag
							onClick={() =>
								reportSearch(results.acronym, result.definition)
							}
							aria-label="Report Inaccurate Definition"
						/>
					</div>
					<div>
						<span>
							<AiFillDislike
								onClick={() =>
									removeLike(
										results.acronym,
										result.definition
									)
								}
							/>
							<AiFillLike
								onClick={() =>
									addLike(results.acronym, result.definition)
								}
							/>
						</span>
					</div>
				</li>
			))}
			{search?.length > 0 && results.length === 0 && (
				<p>
					No results found for{" "}
					<span className="bold">{search.toUpperCase()}</span>
				</p>
			)}
		</StyledSearchResults>
	);
};

export default SearchResults;

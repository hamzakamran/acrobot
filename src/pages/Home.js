import { useEffect, useRef, useState } from "react";
import Modal from "../features/ui/modal/Modal";
import SearchBar from "../features/ui/searchBar/SearchBar";
import SearchResults from "../features/ui/searchResults/SearchResults";
import { acronyms } from "../features/util/dummyData";

const Home = () => {
	const searchRef = useRef();
	const [modalOpen, setModalOpen] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData([...acronyms]);
	}, []);

	const addLike = (target, targetDefinition) => {
		for (const acronym of data) {
			if (acronym.acronym.toLowerCase() === target.toLowerCase()) {
				for (const definition of acronym.definitions) {
					if (definition.definition === targetDefinition) {
						definition.votes++;
						console.log("Liked definition");
					}
				}
			}
		}
	};

	const removeLike = (target, targetDefinition) => {
		for (const acronym of data) {
			if (acronym.acronym.toLowerCase() === target.toLowerCase()) {
				for (const definition of acronym.definitions) {
					if (definition.definition === targetDefinition) {
						definition.votes--;
						console.log("Disliked definition");
					}
				}
			}
		}
	};

	const reportSearch = (target, targetDefinition) => {
		const newAcronyms = data.filter((acr) => acr.acronym !== target);
		for (const acronym of data) {
			if (acronym.acronym.toLowerCase() === target.toLowerCase()) {
				const newDefinitions = acronym.definitions.filter(
					(definition) => definition.definition !== targetDefinition
				);
				const newAcronym = {
					...acronym,
					definitions: newDefinitions,
				};
				setSearchResults(newAcronym);
				setData([...newAcronyms, newAcronym]);
				console.log("Search removed from", target);
			}
		}
	};

	const findResults = (target) => {
		for (const acronym of data) {
			if (acronym.acronym.toLowerCase() === target.toLowerCase()) {
				return acronym;
			}
		}
		return [];
	};

	const setSortedResults = () => {
		const search = searchRef.current?.value.toLowerCase();
		const result = findResults(search);
		const arr = result?.definitions || [];
		arr.sort((a, b) => b.votes - a.votes);
		setSearchResults(arr.length > 0 ? { ...result, definitions: arr } : []);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSortedResults();
	};

	const createDefinition = (newAcronym, newDefinition) => {
		for (const acronym of data) {
			if (acronym.acronym.toLowerCase() === newAcronym.toLowerCase()) {
				for (const definition of acronym.definitions) {
					if (
						definition.definition.toLowerCase() ===
						newDefinition.toLowerCase()
					) {
						alert("This definition already exists.");
						return false;
					}
				}
				const otherData = data.filter(
					(acr) =>
						acr.acronym.toLowerCase() !== newAcronym.toLowerCase()
				);
				const newDef = {
					definition: newDefinition.toLowerCase(),
					votes: 1,
				};
				const newAcr = {
					...acronym,
					definitions: [...acronym.definitions, newDef],
				};
				setData([...otherData, newAcr]);
				console.log("Acronym updated; new definition created.");
				return true;
			}
		}
		const newAcr = {
			acronym: newAcronym.toLowerCase(),
			definitions: [
				{
					definition: newDefinition.toLowerCase(),
					votes: 1,
				},
			],
		};
		console.log("New acronym created; new definition created.");
		setData([...data, newAcr]);
		return true;
	};

	return (
		<>
			<main className="column container">
				<SearchBar ref={searchRef} handleSubmit={handleSubmit} />
				<SearchResults
					addLike={addLike}
					removeLike={removeLike}
					reportSearch={reportSearch}
					addDefinition={() => setModalOpen(true)}
					search={searchRef.current?.value}
					results={searchResults}
				/>
			</main>
			{modalOpen && (
				<Modal
					createDefinition={createDefinition}
					closeModal={() => setModalOpen(false)}
				/>
			)}
		</>
	);
};

export default Home;

import styled from "styled-components";

export const StyledSearchBar = styled.form`
	display: flex;

	input {
		width: 100%;
		border: 1px solid #dfe6e9;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		font-size: 18px;
		outline: none;
		padding: 0 1rem;
	}

	input:focus,
	input:active {
		border: 1px solid black;
	}

	button {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background: none;
		outline: none;
		border: none;
		background: #dfe6e9;
		cursor: pointer;
		padding: 0.5rem 1rem;
		transition: all 0.25s;

		&:hover {
			background: #00b894;

			svg {
				color: white;
			}
		}

		svg {
			width: 20px;
			height: 20px;
			color: black;
		}
	}
`;

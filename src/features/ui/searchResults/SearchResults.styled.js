import styled from "styled-components";

export const StyledSearchResults = styled.ul`
	display: flex;
	flex-direction: column;

	li {
		list-style: none;
		padding: 1rem;
		border-bottom: 1px solid black;
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		text-transform: capitalize;

		&:last-child {
			border-bottom: none;
		}

		div {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			svg {
				cursor: pointer;
				width: 25px;
				height: 25px;
				transition: all 0.25s;

				&:hover {
					color: #6c5ce7;
				}
			}
		}
	}
`;

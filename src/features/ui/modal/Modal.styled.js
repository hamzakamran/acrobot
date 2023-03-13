import styled from "styled-components";

export const ModalContainer = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.25);
	transition: all 0.25s;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledModal = styled.div`
	background: white;
	border-radius: 10px;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	min-width: 500px;

	div.modalRow {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	form {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;

		input {
			font-size: 1rem;
			padding: 0.25rem 0.5rem;
			border-radius: 5px;
			outline: none;
			border: 1px solid black;

			&:focus,
			&:active {
				outline: 1px solid #6c5ce7;
			}
		}

		button {
			background: none;
			border: 2px solid #6c5ce7;
			font-size: 1rem;
			font-weight: 500;
			letter-spacing: 0.15px;
			padding: 0.25rem;
			border-radius: 5px;
			outline: none;
			color: #6c5ce7;
			cursor: pointer;
			transition: all 0.25s;

			&:focus,
			&:active,
			&:hover {
				color: white;
				background: #6c5ce7;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			row-gap: 0.25rem;
		}
	}
`;

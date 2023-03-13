import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { ModalContainer, StyledModal } from "./Modal.styled";

const Modal = ({ closeModal, createDefinition }) => {
	const acronymRef = useRef("");
	const definitionRef = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!acronymRef.current?.value || !definitionRef.current?.value) {
			alert("Please include an acronym and description.");
		} else {
			if (
				createDefinition(
					acronymRef.current.value,
					definitionRef.current.value
				)
			) {
				acronymRef.current.value = "";
				definitionRef.current.value = "";
			}
		}
	};

	useEffect(() => {
		acronymRef.current.focus();
	}, []);

	return (
		<ModalContainer>
			<StyledModal>
				<div className="modalRow">
					<h2>Create New Definition</h2>
					<FiX onClick={closeModal} className="svgIcon" />
				</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Acronym:</label>
						<input ref={acronymRef} type="text" />
					</div>
					<div>
						<label>Definition:</label>
						<input ref={definitionRef} type="text" />
					</div>
					<button>Create New Definition</button>
				</form>
			</StyledModal>
		</ModalContainer>
	);
};

export default Modal;

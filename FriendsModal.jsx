import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
	console.log("props: ", props);

	return (
		<React.Fragment>
			<Modal isOpen={props.isOpen} toggle={props.toggle}>
				<ModalHeader toggle={props.setModalIsOpenToTrue}>
					{props.bio}
				</ModalHeader>
				<ModalBody>{props.slug}</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={props.onClick}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</React.Fragment>
	);
};

export default ModalExample;

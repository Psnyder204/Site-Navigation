import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalExample from "./FriendsModal";
import debug from "sabio-debug";
import PropTypes from "prop-types";

function FriendsCard(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const aFriend = props.friend;
	const _logger = debug.extend("FriendsCard");
	_logger("aFriend", props.location); //friendsCard Logger

	const onDeleteFriendClicked = (e) => {
		e.preventDefault();
		props.onFriendsClicked(props.friend, e);
	};

	const navigate = useNavigate();

	const onEditClicked = (e) => {
		e.stopPropagation();
		navigateToEditFriend(aFriend);
	};

	const navigateToEditFriend = (afriend) => {
		const state = { type: "EDIT_FRIEND", payload: aFriend };
		navigate(`/Friends/${afriend.id}`, { state });
	};

	const setModalIsOpenToTrue = () => {
		setModalIsOpen((prev) => !prev);
	};

	return (
		<div className="col-md-3">
			<div className="card">
				<img
					src={aFriend.primaryImageUrl}
					className="card-img-top"
					alt="Friend Avatar"
				/>
				<div className="card-body">
					<h5 className="card-title">{aFriend.title}</h5>

					<p className="card-text">{aFriend.summary}</p>
					<div className="d-flex align-items-start gap-3 mb-3">
						<button
							className="link-btn btn btn-danger"
							onClick={onDeleteFriendClicked}>
							Delete
						</button>
						<button
							className="link-btn btn btn-primary"
							type="button"
							id="editFriend"
							data-id={aFriend.id}
							onClick={onEditClicked}>
							Edit
						</button>
						<button className="btn btn-info" onClick={setModalIsOpenToTrue}>
							Info
						</button>
						{/* <Modal isOpen={modalIsOpen} toggle={setModalIsOpenToTrue}>
							<ModalHeader toggle={setModalIsOpenToTrue}>
								{aFriend.bio}
							</ModalHeader>
							<ModalBody>{props.slug}</ModalBody>
							<ModalFooter>
								<Button color="secondary" onClick={setModalIsOpenToTrue}>
									Close
								</Button>
							</ModalFooter>
						</Modal> */}
						<ModalExample
							isOpen={modalIsOpen}
							toggle={setModalIsOpenToTrue}
							bio={aFriend.bio}
							slug={aFriend.slug}
							onClick={setModalIsOpenToTrue}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

FriendsCard.propTypes = {
	friend: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.number.isRequired,
		bio: PropTypes.string.isRequired,
		summary: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
	}),
};

export default React.memo(FriendsCard);

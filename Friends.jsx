import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/friendsService";
import FriendsCard from "./FriendsCard";
import toastr from "toastr";
//import Pagination from 'rc-pagination';
// import "../../assets/index.less";
// import "rc-select/assets/index.less";

//---------------------------------------------------state Region-------------------------------------------------------------------------------//
/*
-  FriendsData(OR STATE) has a property called arrayOfFriends which has an empty array,
 	so in useEffect I can call setFriendsData to add in friendObjects which I pull from postman from userService
	i achieved this from the useEffect hook which pulled the data from postman through userSerivce 
*/
function Friends() {
	const [friendsData, setFriendsData] = useState({
		arrayOfFriends: [],
		friendsComponents: [],
	});

	const [count, setCount] = useState(0);
	const [showFriends, setShowFriends] = useState(true);

	//false && console.log(friendsData.arrayOfFriends);

	//------------------------------------------------------click Handler Region---------------------------------------------------------------------------//
	/*
- useEffect calls the getFriends function inside userService, which gets the registered friends list from postman
- onGetFriendsSuccess function is giving newFriendsData a value equal to the array of friends from postman  
- setFriendsData is my updater function that will copy over my previous state(ie. arrayOfFriends: []),
	 and updates it with the data passed from postamn, this is alsow here mount and unmount occurs
- updatedState.friendsComponents = newFriendsData.map(mapFriends); is mapping through the data that is passed,
	only the one time when getFriends function in userservice successfully pulls the data from postman,
	this way the data will not render everytime the page updates. 
- 
*/
	useEffect(() => {
		console.log("firing useEffect for getFriends");

		userService
			.getFriends(0, 3)
			.then(onGetFriendsSuccess)
			.catch(onGetFriendsError);
	}, []);

	const onGetFriendsSuccess = (data) => {
		//console.log(data);
		let newFriendsData = data.item.pagedItems;
		console.log({ newFriendsData });

		setFriendsData((prevState) => {
			const updatedState = { ...prevState };
			updatedState.arrayOfFriends = newFriendsData; //this instance of state is where I am updating state with the array passed from the userService.getFriends fucntion
			updatedState.friendsComponents = newFriendsData.map(mapFriends); //this instance of state is where I am mapping state with my friendsCards logic
			return updatedState;
		});
	};

	const onGetFriendsError = (error) => {
		console.log(error);
	};

	const onHeaderClicked = () => {
		setCount((prevState) => {
			return prevState + 1;
		});
	};

	const onHideFriendsClicked = () => {
		setShowFriends((prev) => !prev);
	};

	const onDeleteRequested = useCallback((myFriend, eObj) => {
		console.log(myFriend.id, { myFriend, eObj }); //data coming in from the clicking the button on friends card

		const handler = getDeleteSuccessHandler(myFriend.id);

		userService.deleteFriend(myFriend.id).then(handler).catch(onDeleteError);
	}, []);

	const getDeleteSuccessHandler = (idToBeDeleted) => {
		return () => {
			console.log("onDeleteSuccess", idToBeDeleted);
			toastr.success("Friend Deleted Successfully");

			setFriendsData((prevState) => {
				const fd = { ...prevState }; //makes a copy of state*NEVER MANIPULATE STATE, MAKE A COPY
				fd.arrayOfFriends = [...fd.arrayOfFriends]; //makes a copy of the array in state

				const idxOf = fd.arrayOfFriends.findIndex((friend) => {
					//using indexOf function, im looping through the array, looking for an object with the same id as the one on the card that was clicked
					let result = false;

					if (friend.id === idToBeDeleted) {
						//if the loop finds the id in the array, result will turn true
						result = true;
					}

					return result;
				});

				if (idxOf >= 0) {
					//if the result returns true, meaning the array had an id equal to the clickObj id, then it will return with an idxOf 0 or greater than 0 if there is more than 1
					fd.arrayOfFriends.splice(idxOf, 1); //splice will remove friendObject that was looped/filtered/indexed out of the array we copied from state
					fd.friendsComponents = fd.arrayOfFriends.map(mapFriends); //after removing the friend object, i generate a new array
				}

				return fd;
			});
		};
	};

	// const onDeleteSuccess = idToBeDeleted;
	const onDeleteError = (error) => {
		console.log(error);
		toastr.error("They're not Going Anywhere");
	};

	//----------------------------------------------------------Mapping Function--------------------------------------------------------------------//
	/*
- mapFriends function is set up to map the array of friends with the logic created in the FriendsCard component, 
in other words this function maps the array to cards
*/
	const mapFriends = (aFriend) => {
		return (
			<FriendsCard
				friend={aFriend}
				key={"Cowboy Bebop-" + aFriend.id}
				onFriendsClicked={onDeleteRequested}
			/>
		);
	};

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*
- freindsData.friendsComponents sees that that the array passed is the same as the previous and knows not to run it again,
	mapping in a seperate compnet from the one that renders the data to the page makes your page run more efficiently. 
*/
	return (
		<div className="container">
			<h3 onClick={onHeaderClicked}>Friends {count}</h3>
			<div className="d-flex align-items-start gap-3 mb-3">
				<button className="btn btn-secondary" onClick={onHideFriendsClicked}>
					{showFriends ? "Hide" : "Show"}
				</button>
				<Link
					to="/Friends/New"
					className="nav-link active btn-link btn btn-success">
					New Friend
				</Link>
			</div>
			<div className="row">
				{showFriends && friendsData.arrayOfFriends.map(mapFriends)}
			</div>
			{/* <div className="row">{showFriends && friendsData.friendsComponents}</div> */}
		</div>
	);
}

export default Friends;

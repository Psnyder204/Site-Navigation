import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import usersService from "../../services/friendsService";
import toastr from "toastr";

//-----------------------------------------------------------State Region----------------------------------------------------------------------------------//
/*
- the NewFriend function is where I set state for the NewFriend component page.  
- NewFriendFormData is my state, setNewFriendFormData is my updater function 
	which is set up with the useState hook so I can pass state to other components
*/

function NewFriend() {
  const [newFriendFormData, setNewFriendFormData] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: 323,
    imageTypeId: 12,
    imageUrl: "",
    skills: [],
  });

  const { state } = useLocation();
  const { friendId } = useParams();

  const [newFriendId, setNewFriendId] = useState(friendId);
  console.log({ newFriendId, friendId, state });

  //------------------------------------------------------------addNewFriend Region-----------------------------------------------------------------------//

  /*onFormFieldChange creates an event for setState to change state acording to what is passed into the NewFriend user forms
- target is where the event happend, in this case, which field was typed into,
	 we create this variable so we can pull data from that specific field
- newUserValue is what was actaully passed into the field/what the user typed
- nameOfField is the name property of the field where the event took place

*/

  const onFormFieldChange = (event) => {
    console.log("onChange", { syntheticEvent: event });

    const target = event.target;

    const newUserValue = target.value;

    const nameOfField = target.name;
    console.log({ nameOfField, newUserValue });
    setNewFriendFormData((prevState) => {
      console.log("updater onChange");

      const newUserObject = {
        ...prevState,
      };

      newUserObject[nameOfField] = newUserValue;

      return newUserObject;
    });
  };

  //----------------------------------------------------------editFriend Region----------------------------------------------------------------------------//

  useEffect(() => {
    console.log("useEffect firing");
    setNewFriendId(friendId);

    if (state?.type === "EDIT_FRIEND" && state.payload) {
      console.log("friend edit firing", state.payload);
      setNewFriendFormData((prevState) => {
        const newStateObject = state.payload;
        newStateObject.primaryImage = newStateObject.primaryImage.imageUrl;
        return { ...prevState, ...newStateObject };
      });
    }
  }, [friendId, state]);

  //---------------------------------------------------------------Click Handler Region------------------------------------------------------------------//
  const onNewFriendClick = (e) => {
    e.preventDefault();

    if (friendId === undefined) {
      usersService
        .addNewFriend(newFriendFormData)
        .then(onAddNewFriendSuccess)
        .catch(onAddNewFriendError);
    } else if (friendId !== undefined) {
      usersService
        .updateFriend(newFriendFormData, friendId)
        .then(onUpdateFriendSuccess)
        .catch(onUpdateFriendError);
    }
  };

  const onAddNewFriendSuccess = (response) => {
    console.log(response, "onLogInSuccess");
    toastr.success("New Friend Added Succsessfully");
  };

  const onAddNewFriendError = (error) => {
    console.log(error, "on Add Friend Error");
    toastr.error("Invalid Form Data, Please Try Again");
  };

  const onUpdateFriendSuccess = (response) => {
    console.log(response, "onLogInSuccess");
    toastr.success("Updated Friend Succsessfully");
  };

  const onUpdateFriendError = (error) => {
    console.log(error, "onLogInError");
    toastr.error("Invalid Form Data, Please Try Again");
  };

  //--------------------------------------------------------------Render To Dom Region-------------------------------------------------------------------//
  return (
    <React.Fragment>
      <h3 className="container">
        {friendId ? "Edit Friend" : "Add New Friend"}
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control  form-control-lg"
                  id="title"
                  name="title"
                  placeholder="Enter Your Full Name"
                  value={newFriendFormData.title}
                  onChange={onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <textarea
                  type="text"
                  className="form-control  form-control-lg"
                  id="bio"
                  name="bio"
                  placeholder="Enter Your Biography"
                  value={newFriendFormData.bio}
                  onChange={onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="summary" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  className="form-control  form-control-lg"
                  id="summary"
                  name="summary"
                  placeholder="Enter a short description of yourself"
                  value={newFriendFormData.summary}
                  onChange={onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="headline" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  className="form-control  form-control-lg"
                  id="headline"
                  name="headline"
                  placeholder="Enter Your headline"
                  value={newFriendFormData.headline}
                  onChange={onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control  form-control-lg"
                  id="slug"
                  name="slug"
                  placeholder="Choose a unique Username"
                  value={newFriendFormData.slug}
                  onChange={onFormFieldChange}
                />
              </div>
              {/* <div className="mb-3">
								<select
									className="form-select"
									aria-label="Default select example"
									id="statusId"
									name="statusId"
									value={newFriendFormData.statusId}
									onChange={onFormFieldChange}>
									<option value="NotSet">NotSet</option>
									<option value="Active">Active</option>
									<option value="Deleted">Deleted</option>
									<option value="Flagged">Flagged</option>
								</select>
							</div> */}
              <div className="mb-3">
                <label htmlFor="primaryImageUrl" className="form-label">
                  Profile Url
                </label>
                <input
                  type="url"
                  className="form-control  form-control-lg"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Provide an imageUrl for your profile"
                  value={newFriendFormData.primaryImageUrl}
                  onChange={onFormFieldChange}
                />
              </div>
              <button
                type="button" //type button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
                className="btn btn-success"
                onClick={onNewFriendClick}
              >
                {friendId ? "Update Friend" : "Add New Friend"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(NewFriend);

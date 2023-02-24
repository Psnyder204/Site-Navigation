import React, { useState } from "react";
import usersService from "../../services/userService";
import toastr from "toastr";

///////////////////////////////////////////////////////
/*
- the Register function is where I set state for the Register component page.  
- RegisterFormData is my state, setRegisterFormData is my updater function 
	which is set up with the useState hook so I can pass state to other components
*/

function Register() {
	const [registerFormData, setRegisterFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		passwordConfirm: "",
		avatarUrl: "",
		tenantId: "U0498QKN7S5",
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*onFormFieldChange creates an event for setState to change state acording to what is passed into the register user forms
- target is where the event happend, in this case, which field was typed into,
	 we create this variable so we can pull data from that specific field
- newUserValue is what was actaully passed into the field/what the user typed
- nameOfField is the name property of the field where the event took place

*/

	const onFormFieldChange = (event) => {
		//console.log("onChange", { syntheticEvent: event });

		const target = event.target;

		const newUserValue = target.value;

		const nameOfField = target.name;
		//console.log({ nameOfField, newUserValue });
		setRegisterFormData((prevState) => {
			//console.log("updater onChange");

			const newUserObject = {
				...prevState,
			};

			newUserObject[nameOfField] = newUserValue;

			return newUserObject;
		});
	};
	const onRegisterClick = () => {
		usersService
			.register(registerFormData)
			.then(onRegisterSuccess)
			.catch(onRegisterError);
	};

	const onRegisterSuccess = (response) => {
		console.log(response, "onLogInSuccess");
		toastr.success("User Registration Succsessful");
	};

	const onRegisterError = (error) => {
		console.log(error, "onLogInError");
		toastr.error("Invalid Form Data, Please try Registering Again");
	};

	return (
		<React.Fragment>
			<h3 className="container">Register</h3>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 offset-lg-4">
						<form>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control  form-control-lg"
									id="email"
									name="email"
									placeholder="Enter Your Email Address"
									value={registerFormData.email}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="firstName" className="form-label">
									First Name
								</label>
								<input
									type="text"
									className="form-control  form-control-lg"
									id="firstName"
									name="firstName"
									placeholder="Enter Your First Name"
									value={registerFormData.firstName}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="lastName" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									className="form-control  form-control-lg"
									id="lastName"
									name="lastName"
									placeholder="Enter Your Last Name"
									value={registerFormData.lastName}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control  form-control-lg"
									id="password"
									name="password"
									placeholder="Enter Your Password"
									value={registerFormData.password}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Confirm Password
								</label>
								<input
									type="password"
									className="form-control  form-control-lg"
									id="passwordConfirm"
									name="passwordConfirm"
									placeholder="Re-Enter Your Password"
									value={registerFormData.passwordConfirm}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="avatar" className="form-label">
									Profile Url
								</label>
								<input
									type="url"
									className="form-control  form-control-lg"
									id="avatarUrl"
									name="avatarUrl"
									placeholder="Provide a Url to an image"
									value={registerFormData.avatarUrl}
									onChange={onFormFieldChange}
								/>
							</div>
							<button
								type="button" //type button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
								className="btn btn-primary"
								onClick={onRegisterClick}>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Register;

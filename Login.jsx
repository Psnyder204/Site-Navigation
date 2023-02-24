import React, { useState } from "react";
import usersService from "../../services/userService";
import toastr from "toastr";

///////////////////////////////////////////////////////////////////////////////////////
/*
- Login function is setting state so later in my setLoginFormData function it can create a copy of this state,
	and change the date with the usersinput 
*/
function Login() {
	const [logInFormData, setlogInFormData] = useState({
		email: "",
		password: "",
		tenantId: "U0498QKN7S5",
	});

	///////////////////////////////////////////////////////////////////////////////////////
	/*
- onFormFieldChange is set up to run when an event happens, in this case, the onChange event set up inside the forms
- target grabs the specific target where the event occured, in this case it is all of the input properties, 
- newUserValue is the user input
- nameOfField grabs the name of the field
*/
	const onFormFieldChange = (event) => {
		//console.log("onChange", { syntheticEvent: event });

		const target = event.target;

		const newUserValue = target.value;

		const nameOfField = target.name;
		//console.log({ nameOfField, newUserValue });
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		/*
- setLogInFormData is grabbing the previous state inside its paramaters, and passing a clone of state to the newUserObject
- newUserObject is a clone of previous state
- newUserObject[nameOfField] is the user input and the name of the field whcih the data was input 
	example:{email: 'psnyder204@gmail.com', password: '', tenantId: 'U0498QKN7S5'}
*/
		setlogInFormData((prevState) => {
			//console.log("updater onChange");

			const newUserObject = {
				...prevState,
			};

			newUserObject[nameOfField] = newUserValue;

			return newUserObject;
		});
	};
	///////////////////////////////////////////////////////////////////////////
	/*
- onSignInClick is connected to my userService page and the logIn function specifically, 
	when the user data is input successfully the on SignInClick will run the onLogInSuccess function
- .catch will run the onLigInError function if the user data was input incorrectly

*/
	const onSignInClick = () => {
		usersService.logIn(logInFormData).then(onLogInSuccess).catch(onLogInError);
	};

	const onLogInSuccess = (response) => {
		console.log(response, "onLogInSuccess");
		toastr.success("Login Succsessful");
	};

	const onLogInError = (error) => {
		console.log(error, "onLogInError");
		toastr.error("Email or Password Invalid");
	};

	return (
		<React.Fragment>
			<h3 className="container">Login</h3>
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
									value={logInFormData.email}
									onChange={onFormFieldChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									name="password" //name or id necessary to accurately grab this field
									className="form-control  form-control-lg"
									id="password"
									placeholder="Enter Your Password" //whats shown before the user writes anything
									value={logInFormData.password}
									onChange={onFormFieldChange}
								/>
							</div>
							<button
								type="button"
								className="btn btn-primary"
								onClick={onSignInClick}>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Login;

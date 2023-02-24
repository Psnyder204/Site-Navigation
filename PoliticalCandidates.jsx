import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import PoliticalCandidateCard from "./PoliticalCandidateCard";
import politicalCandidateService from "./services/politicalCandidateService";
import toastr from "toastr";

function PoliticalCandidates() {
	const [submitFormData, setSubmitFormData] = useState({
		firstName: "",
		lastName: "",
		currentVotes: "",
		party: "",
		imageUrl: "",
		tenantId: "U0498QKN7S5",
	});

	const [submitFormData2, setSubmitFormData2] = useState({
		firstName2: "",
		lastName2: "",
		currentVotes2: "",
		party2: "",
		imageUrl2: "",
		tenantId: "U0498QKN7S5",
	});

	const onFormFieldChange = (event) => {
		console.log("onChange", { syntheticEvent: event });

		const target = event.target;

		const newUserValue = target.value;

		const nameOfField = target.name;

		setSubmitFormData((prevState) => {
			const newUserObject = {
				...prevState,
			};

			newUserObject[nameOfField] = newUserValue;

			return newUserObject;
		});
	};
	const onSubmitClick = () => {
		politicalCandidateService
			.submit(submitFormData)
			.then(onSubmitSuccess)
			.catch(onSubmitError);
	};

	const onSubmitSuccess = (response) => {
		console.log(response, "onSubmitSuccess");
		toastr.success("User Registration Succsessful");
	};

	const onSubmitError = (error) => {
		console.log(error, "onSubmitError");
		toastr.error("Invalid Form Data, Please try Submitting Again");
	};

	const onFormFieldChange2 = (event) => {
		console.log("onChange", { syntheticEvent: event });

		const target = event.target;

		const newUserValue = target.value;

		const nameOfField = target.name;

		setSubmitFormData2((prevState) => {
			const newUserObject = {
				...prevState,
			};

			newUserObject[nameOfField] = newUserValue;

			return newUserObject;
		});
	};

	const onSubmitClick2 = () => {
		politicalCandidateService
			.submit(submitFormData2)
			.then(onSubmitSuccess2)
			.catch(onSubmitError2);
	};

	const onSubmitSuccess2 = (response) => {
		console.log(response, "onSubmitSuccess2");
		toastr.success("User Registration Succsessful");
	};

	const onSubmitError2 = (error) => {
		console.log(error, "onSubmitError2");
		toastr.error("Invalid Form Data, Please try Submitting Again");
	};

	return (
		<React.Fragment>
			{/* <Routes>
				<Route
					path="/PoliticalCandidatesCard"
					element={
						<PoliticalCandidateCard politicalCandidate={submitFormData} />
					}></Route>
			</Routes> */}
			<div className="container">
				<div className="form-left">
					<form>
						<div className="form-group">
							<label htmlFor="firstName" className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control  form-control-lg"
								id="firstName"
								name="firstName"
								placeholder="Enter Your First Name"
								value={submitFormData.firstName}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName" className="form-label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control  form-control-lg"
								id="lastName"
								name="lastName"
								placeholder="Enter Your Last Name"
								value={submitFormData.lastName}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="currentVotes" className="form-label">
								Current Votes
							</label>
							<input
								type="number"
								className="form-control  form-control-lg"
								id="currentVotes"
								name="currentVotes"
								placeholder="Vote Count"
								value={submitFormData.currentVotes}
								onChange={onFormFieldChange}
							/>
						</div>
						<div className="form-group">
							<select
								className="form-select"
								aria-label="Default select example"
								id="party"
								name="party">
								<option value="">Select</option>
								<option value="democrat">Democrat</option>
								<option value="republican">Republican</option>
								<option value="independent">Independent</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="imageUrl" className="form-label">
								ImageUrl
							</label>
							<input
								type="url"
								className="form-control  form-control-lg"
								id="imageUrl"
								name="imageUrl"
								placeholder="Provide a Url to an image"
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={onSubmitClick}>
							Submit
						</button>
					</form>
				</div>

				<div className="form-right">
					<form>
						<div className="form-group">
							<label htmlFor="firstName2" className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control  form-control-lg"
								id="firstName2"
								name="firstName2"
								placeholder="Enter Your First Name"
								value={submitFormData2.firstName2}
								onChange={onFormFieldChange2}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName2" className="form-label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control  form-control-lg"
								id="lastName2"
								name="lastName2"
								placeholder="Enter Your Last Name"
								value={submitFormData2.lastName2}
								onChange={onFormFieldChange2}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="currentVotes2" className="form-label">
								Current Votes
							</label>
							<input
								type="number"
								className="form-control  form-control-lg"
								id="currentVotes2"
								name="currentVotes2"
								placeholder="Vote Count"
								value={submitFormData2.currentVotes2}
								onChange={onFormFieldChange2}
							/>
						</div>
						<div className="form-group">
							<select
								className="form-select"
								aria-label="Default select example"
								id="party2"
								name="party2">
								<option value="">Select</option>
								<option value="democrat">Democrat</option>
								<option value="republican">Republican</option>
								<option value="independent">Independent</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="imageUrl2" className="form-label">
								ImageUrl
							</label>
							<input
								type="url"
								className="form-control  form-control-lg"
								id="imageUrl2"
								name="imageUrl2"
								placeholder="Provide a Url to an image"
								value={submitFormData2.imageUrl2}
								onChange={onFormFieldChange2}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary"
							onClick={onSubmitClick2}>
							Submit
						</button>
					</form>
				</div>
			</div>
			<PoliticalCandidateCard politicalCandidate={submitFormData} />
		</React.Fragment>
	);
}

export default PoliticalCandidates;

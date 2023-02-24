import React from "react";

function PoliticalCandidateCard(props) {
	return (
		<React.Fragment>
			<h3 className="container">Political Candidate</h3>
			<div className="col-md-3">
				<div className="card">
					<img
						src={props.politicalCandidate.imageUrl}
						className="card-img-top"
						alt="Friend Avatar"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{props.politicalCandidate.firstName}
							{props.politicalCandidate.lastName}
						</h5>
						<p className="card-text">{props.politicalCandidate.party}</p>
						<p className="card-text">{props.politicalCandidate.currentVotes}</p>
					</div>
				</div>
			</div>
			<h3 className="container">Political Candidate 2</h3>
			<div className="col-md-3">
				<div className="card">
					<img
						src={props.politicalCandidate.imageUrl2}
						className="card-img-top"
						alt="Friend Avatar"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{props.politicalCandidate.firstName2}
							{props.politicalCandidate.lastName2}
						</h5>
						<p className="card-text">{props.politicalCandidate.party2}</p>
						<p className="card-text">
							{props.politicalCandidate.currentVotes2}
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default PoliticalCandidateCard;

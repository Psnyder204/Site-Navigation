import React from "react";

function SingleCar(props) {
	const aCar = props.car;
	console.log(aCar);

	const onCarClicked = (e) => {
		e.preventDefault();
		props.onHideCarsClicked(props.car, e);
	};

	return (
		<div className="card border-dark mb-3">
			<div className="card-body">
				<h5 className="card-title">{aCar.make}</h5>
				<p className="card-text">{aCar.model}</p>
				<p className="card-text">{aCar.year}</p>
				<button className="select-me btn-primary" onClick={onCarClicked}>
					Select Me
				</button>
			</div>
		</div>
	);
}

export default React.memo(SingleCar);

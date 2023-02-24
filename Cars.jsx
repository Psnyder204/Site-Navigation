import React, { useState, useEffect } from "react";
import userService from "../../components/codeChallenge/services/carService";
import SingleCar from "../../components/codeChallenge/SingleCar";

function Cars() {
	const [carsData, setCarsData] = useState({
		arrayOfCars: [],
		carsComponents: [],
	});
	console.log(carsData, setCarsData);
	const [showCars, setShowCars] = useState(false);

	//false && console.log(CarsData.arrayOfCars);

	//------------------------------------------------------Axios Call Region---------------------------------------------------------------------------//

	useEffect(() => {
		console.log("firing useEffect for getCars");

		userService.getAll().then(onGetAllSuccess).catch(onGetAllError);
	}, []);

	const onGetAllSuccess = (data) => {
		//console.log(data);
		let newCarsData = data;
		console.log({ newCarsData });

		setCarsData((prevState) => {
			const updatedState = { ...prevState };
			updatedState.arrayOfCars = newCarsData; //this instance of state is where I am updating state with the array passed from the userService.getCars fucntion
			updatedState.carsComponents = newCarsData.map(mapCars); //this instance of state is where I am mapping state with my CarsCards logic
			return updatedState;
		});
	};

	const onGetAllError = (error) => {
		console.log(error, "GetCars Error");
	};

	const filter2018 = () => {
		console.log("filter 2018 Cars");
		setCarsData((prevState) => {
			let newState = { ...prevState };
			const is2018Array = carsData.arrayOfCars.filter(
				(cars) => cars.year === 2018
			);
			newState.carsComponents = is2018Array.map(mapCars);
			return newState;
		});
	};
	/////////////
	const filter2019 = () => {
		console.log("filter 2019 Cars");
		setCarsData((prevState) => {
			let newState = { ...prevState };
			const is2019Array = carsData.arrayOfCars.filter(
				(cars) => cars.year === 2019
			);
			newState.carsComponents = is2019Array.map(mapCars);
			return newState;
		});
	};

	const filter2020 = () => {
		console.log("filter 2020 Cars");
		setCarsData((prevState) => {
			let newState = { ...prevState };
			const is2020Array = carsData.arrayOfCars.filter(
				(cars) => cars.year === 2020
			);
			newState.carsComponents = is2020Array.map(mapCars);
			return newState;
		});
	};
	const filter2021 = () => {
		console.log("filter 2021 Cars");
		setCarsData((prevState) => {
			let newState = { ...prevState };
			const is2021Array = carsData.arrayOfCars.filter(
				(cars) => cars.year === 2021
			);
			newState.carsComponents = is2021Array.map(mapCars);
			return newState;
		});
	};
	//////////
	const resetFilters = () => {
		setCarsData((prevState) => {
			let newState = { ...prevState };
			newState.carsComponents = newState.arrayOfCars.map(mapCars);
			return newState;
		});
	};

	const onHideCarsClicked = () => {
		setShowCars((prev) => !prev);
	};

	//----------------------------------------------------------Mapping to cards Function--------------------------------------------------------------------//

	const mapCars = (aCar, index) => {
		return (
			<SingleCar key={index} car={aCar} onCarsClicked={onHideCarsClicked} />
		);
	};

	//----------------------------------------------------------Render to Dom Region--------------------------------------------------------------------//

	return (
		<div className="container">
			<h3>Cars</h3>
			<div className="row">
				<div className="d-flex align-items-start gap-3 mb-3">
					<button
						className="btn btn-secondary"
						id="show-all"
						onClick={onHideCarsClicked}>
						Show Cars
					</button>

					<button
						className="btn btn-warning"
						id="show-2018-cars"
						onClick={filter2018}>
						2018 Cars
					</button>

					<button
						className="btn btn-warning"
						id="show-2019-cars"
						onClick={filter2019}>
						2019 Cars
					</button>

					<button
						className="btn btn-warning"
						id="show-2020-cars"
						onClick={filter2020}>
						2020 Cars
					</button>

					<button
						className="btn btn-warning"
						id="show-2021-cars"
						onClick={filter2021}>
						2021 Cars
					</button>
					<button
						className="btn btn-warning"
						id="show-2021-cars"
						onClick={resetFilters}>
						Reset Filters
					</button>

					{/* <div className="row">{showCars && Cars.mapped}</div> */}
				</div>
			</div>
			{/* <div className="row">{showCars && carsData.arrayOfCars.map(mapCars)}</div> */}
			<div className="col-md-3">{showCars && carsData.carsComponents}</div>
		</div>
	);
}

export default Cars;

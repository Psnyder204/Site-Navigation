import React from "react";
import { Link } from "react-router-dom";

function SiteNav(props) {
	return (
		<nav
			className="navbar navbar-expand-md navbar-dark bg-dark"
			aria-label="Fourth navbar example">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img
						src="https://pw.sabio.la/images/Sabio.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="Sabio"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarsExample04"
					aria-controls="navbarsExample04"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample04">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<Link to="/" className="nav-link px-2 text-white link-button">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/Friends"
								className="nav-link px-2 text-white link-button">
								Friends
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Jobs" className="nav-link px-2 text-white link-button">
								Jobs
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/Companies"
								className="nav-link px-2 text-white link-button">
								Tech Companies
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/Events"
								className="nav-link px-2 text-white link-button">
								Events
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/Basic"
								className="nav-link px-2 text-white link-button">
								Basic
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/TestAndAjax"
								className="nav-link px-2 text-white link-button">
								Test and Ajax Call
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/People"
								className="nav-link px-2 text-white link-button">
								People
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Cars" className="nav-link px-2 text-white link-button">
								Cars
							</Link>
						</li>
					</ul>
					<div className="text-end">
						<Link
							to="/"
							className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none">
							{props.user.firstName} {props.user.lastName}
						</Link>
						<Link
							to="/Login"
							type="button"
							className="btn btn-outline-light me-2">
							Login
						</Link>
						<Link to="Register" type="button" className="btn btn-warning">
							Register
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default SiteNav;

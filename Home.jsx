import React from "react";

function Home(props) {
	return (
		<React.Fragment>
			<div>
				<h3 className="container">
					Hello {props.user.firstName} {props.user.lastName}
				</h3>
			</div>
		</React.Fragment>
	);
}

export default Home;

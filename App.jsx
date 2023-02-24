import React, { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom"; //react hook, It provides various Component APIs( like Route, Link, Switch, etc.) that you can use in your React application to render different components based on the URL pathnames in a single page.
import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import Friends from "./components/friends/Friends";
import NewFriend from "./components/friends/NewFriend";
import Jobs from "./components/jobs/Jobs";
import Basic from "./components/Basic/basic";
import Companies from "./components/techcompanies/Companies";
import Events from "./components/events/Events";
import TestAndAjax from "./components/TestAndAjax";
import People from "./components/practice/People";
import Cars from "./components/codeChallenge/Cars";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Footer from "./components/Footer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
- App function is setting state, current user is state and setcurrentuser is an updater, 
	however I hard coded state and I do not update it yet, so I just console.logged it to not error, 
*/
function App() {
	const [currentUser, setCurrentUser] = useState({
		firstName: "Unknown",
		lastName: "User",
		isLoggedIn: false,
	});

	console.log(currentUser, setCurrentUser);
	return (
		<React.Fragment>
			<SiteNav user={currentUser} />
			<Routes>
				{/* user is now a property of current user and can be used in the Home component*/}
				<Route path="/" element={<Home user={currentUser} />}></Route>
				<Route path="/Friends" element={<Friends />}></Route>
				<Route path="/Friends/New" element={<NewFriend />}></Route>
				<Route path="/Friends/:friendId" element={<NewFriend />}></Route>
				{/*friendId is a paramater of this url so I can pass*/}
				<Route path="/Basic" element={<Basic />}></Route>
				<Route path="/Jobs" element={<Jobs />}></Route>
				<Route path="/Companies" element={<Companies />}></Route>
				<Route path="/Events" element={<Events />}></Route>
				<Route path="/TestAndAjax" element={<TestAndAjax />}></Route>
				<Route path="/People" element={<People />}></Route>
				<Route path="/Cars" element={<Cars />}></Route>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/Register" element={<Register />}></Route>
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

export default App;

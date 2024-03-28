import React from "react";
import Header from "./header";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Card from "./card";
const Home = () => {
	return (
		<div>
			<Header/>
			<Jumbotron/>
			<div className="row">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>

			<Footer/>
		</div>
	);
};

export default Home;

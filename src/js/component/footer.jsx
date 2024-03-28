import React from "react";

const Footer = () => {
	let footer = {height:"50px"}
	let organized= {padding: "37%"}
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white" style={footer}>
		<div class="container-fluid">
			<div style={organized}>Copyright @ <a href="https://github.com/adriano1910"> Adriano Github </a></div>
		</div>
	  </nav>
	);
};


export default Footer;
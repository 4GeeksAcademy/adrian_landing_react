import React from "react";

const Header = () => {
    let estiloNavBar = {aligntext: "right"}
	return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 mb-2 bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={estiloNavBar}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
	);
};

export default Header;
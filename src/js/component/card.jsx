import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
    let nombre = "adrian"
    let estilo = { width: "18rem", display:"flex"}
	return (
        <div className="card col-3" style={estilo} >
            <img src={rigoImage} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Hola {nombre}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
	);
};

export default Card;



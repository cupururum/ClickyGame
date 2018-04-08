import React from "react";

const Navbar = (props) => (
  <div className="navbar">
    <div className="container">
        <div className="row">
            <div className="col-md-4"> <h2> Clicky Game </h2> </div>
            <div className="col-md-4"> <h2> Click an image to begin! </h2> </div>
            <div className="col-md-4"> <h2> Score: {props.score} || Top Score: {props.topScore} </h2> </div>
        </div>
    </div>
  </div>
);

export default Navbar;
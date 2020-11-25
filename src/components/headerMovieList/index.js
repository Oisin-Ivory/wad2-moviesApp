import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row" style={{color:"white"}}>
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-dark">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
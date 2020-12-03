import React from "react";
import { Container } from "semantic-ui-react";
import "./headerMovieList.css";

const Header = ({ title, numMovies }) => {
  return (
    <div>
      <Container textAlign="center" id="movieBadge">
      {`${title}  `}
      <span className="badge badge-pill badge-dark">{numMovies}</span>
      </Container>
    </div>
  );
};

export default Header;
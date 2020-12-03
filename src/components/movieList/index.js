import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";
import {Card} from 'semantic-ui-react'
const MovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div style={{marginTop:20}}><Card.Group>{movieCards}</Card.Group></div>;
};

export default MovieList;
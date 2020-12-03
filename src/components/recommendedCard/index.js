import React from "react";
import { Link } from "react-router-dom";
import "./recommendedCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card,Icon, Image } from 'semantic-ui-react'

const RecommendedCard = ({movie, action}) => {
  return (
    <Card id="movieDisplay">
    <Link to={`/movies/${movie.id}`}>
      <Image size='medium' rounded 
        className="card-img-tag center "
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./film-poster-placeholder.png"
        }
      />
      </Link>
      <Card.Content>
        <Card.Header id="movieDisplayHeader"><h4 className="card-title ">{movie.title}</h4></Card.Header>
        <Card.Description>
        <Icon name='calendar alternate outline' color = 'green'/>
          <span> {movie.release_date}</span>

        <Icon name='star' color = 'yellow'/>
          <span> {movie.vote_average}</span>

        </Card.Description>
      </Card.Content>
  </Card>
  );
};

export default RecommendedCard;
import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import {Card,Icon, Image, Rating } from 'semantic-ui-react'


const MovieCard = ({movie, action}) => {

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

          
            <span> <Rating disabled icon='star' defaultRating={movie.vote_average} maxRating={10} />
          </span>
            <br></br><br></br>
            {action(movie)}
          </Card.Description>
        </Card.Content>

    </Card>
  );
};

export default MovieCard;
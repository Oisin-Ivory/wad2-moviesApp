import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";
import {Card, Icon, Image, Divider, Container } from 'semantic-ui-react'
const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-2">
        <Card id="movieDisplay">
          <Image size='medium' rounded 
            className="card-img-tag center "
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
          />
          <Card.Content>
            <Card.Description>
              <Container textAlign="center">
              <Divider horizontal><span>Release Date:</span> </Divider>
              <Icon name='calendar alternate outline' color = 'green'/><span>{movie.release_date}</span>
              <Divider horizontal><span>Rating: </span></Divider>
              <Icon name='star' color = 'yellow'/>
              <span>{movie.vote_average}</span>
              </Container>
            </Card.Description>
        </Card.Content>
        </Card>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;
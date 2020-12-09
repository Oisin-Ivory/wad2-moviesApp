import React from "react";
import "./headerMovie.css";
import "../../globals/fontawesome";
import {Icon,Grid,Header} from 'semantic-ui-react'
const MovieHeader = ({ movie }) => {
  return (
  
    <Grid>
    <Grid.Row>
    <Grid.Column width={3}>
    </Grid.Column>
    <Grid.Column width={4}>
      <Header as="h2" id="heading">
    {movie.title}
          {"  "}
          <a href={movie.homepage} >
          <Icon name='globe'/>
          </a>
    </Header>
    </Grid.Column>
    </Grid.Row>
    </Grid>
  );
};

export default MovieHeader;
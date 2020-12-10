import React from "react";
import { Link } from "react-router-dom";
import "./recommendedCard.css";
import "../../globals/fontawesome";
import {Card,Icon, Image,Reveal, Segment,Container,Header,Button,Divider } from 'semantic-ui-react'
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const RecommendedCard = ({movie}) => {
  return (
    <Card id="movieDisplay">
    
      


<Reveal animated='move'>
    <Reveal.Content visible>
      <div style={{height:450,width:300}}>
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
      </div>
    </Reveal.Content>
    <Reveal.Content hidden>
      <Card.Content >
        <Segment id="movieDisplay">
        
        <Card.Header id="movieDisplayHeader"><h2 className="card-title ">{movie.title}</h2></Card.Header>
        <Divider horizontal></Divider>
        <Card.Description >
        <Container textAlign='left' id="movieDisplayHeader">
                    
          <Icon name='star' color = 'yellow'/>
          <span>Rating: {movie.vote_average}</span>
          <br></br>
          <Icon name='calendar alternate outline' color = 'green'/>
          <span>Release Date: {movie.release_date}</span>
          <br></br><br></br>
          <Container id="briefOverview">
          <Header id="movieDisplayHeader" as='h2'>Overview</Header>
          {movie.overview}
          </Container>
        </Container>
        <br></br><br></br>
        <Link to={`/movies/${movie.id}`} style={{marginLeft:25}} >
          <Button basic inverted color='green' >
           View Movie Page
          </Button>
        </Link>
        </Card.Description>
        </Segment>
      </Card.Content>
    </Reveal.Content>
  </Reveal>
    </Card>
  );
};

export default RecommendedCard;
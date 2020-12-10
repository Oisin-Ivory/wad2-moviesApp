import React, { useEffect, useState } from "react";

import { Button, Container, Divider, Segment } from "semantic-ui-react";
import { getCredits} from "../../api/tmdb-api";
import "./actorsView.css";
import {Image,Table,Header,List} from 'semantic-ui-react'
export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  function sleep(ms){
    while(ms < 100){
      ms++;
    }
    reloadMovieCards();
  }

  function reloadMovieCards(){
    getCredits(movie.id).then(credits => {
        setCredits(credits);
    });
  }

  useEffect(() => {
    getCredits(movie.id).then(credits => {
        setCredits(credits);
    });
  }, []);
  return (
      <>
     
    <Container id = "actorContainer">
    <Divider horizontal ><span><h2>Actors</h2></span></Divider>
    <Button hidden inverted color="blue" onClick={sleep()}>Refresh</Button>
      <List id= "actorList" verticalAlign='middle' horizontal>
	{credits.map(actor => (
           <List.Item id= "actorListElement">
             <Image size='mini' circular 
                           className="card-img-tag center "
                           alt={actor.name}
                           src={
                               actor.profile_path
                               ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                               : "./film-poster-placeholder.png"
                           }
                           />
             <List.Content id= "actorListElement">
               <List.Header id= "actorListElement">{actor.name}</List.Header>
             </List.Content>
           </List.Item>
              ))}
         </List>
         </Container>
</>
  );
};
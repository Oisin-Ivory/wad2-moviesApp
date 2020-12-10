import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { getRecommendations } from "../../api/tmdb-api";
import Movie from "../recommendedCard/";


import {Card,Flag,Container,Segment,Grid,Divider,Header,Icon} from 'semantic-ui-react'

export default ({ movie}) => {
  const [recommendeds, setRecommended] = useState([]);


  useEffect(() => {
    getRecommendations(movie.id).then(recommendeds => {
      setRecommended(recommendeds);
    });
  }, []);


  function sleep(ms){
    while(ms < 100){
      ms++;
    }
    reloadMovieCards();
  }
  const movieCards = recommendeds.map(m => (
    <Movie key={m.id} movie={m}/>
  ));

  function reloadMovieCards(){
    getRecommendations(movie.id).then(recommendeds => {
      setRecommended(recommendeds);
    });
  }

  return (
    
    <>
      
    <Segment id="movieDetails">
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      <Container>
      <Header as='h2'><span>Overview</span></Header>
      <p>{movie.overview}</p>
      </Container>
      </Grid.Column>
      <Grid.Column>
      <table class="table table-dark">
          <tbody>
            <tr>
              <th>Runtime <Icon name="time"></Icon></th>
              <td>{movie.runtime} minutes</td>
            </tr>
            <tr>
              <th>Release Date <Icon name="calendar alternate outline"></Icon></th>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <th>Genres <Icon name="film"></Icon></th>
              <td><ul>
              {movie.genres.map(g => (
                <li key={g.name}>
                  {g.name}
                </li>
              ))}
              </ul></td>
            </tr>
            <tr>
              <th>Spoken Languages <Icon name="assistive listening systems"></Icon></th>
              <td><ul>
              {movie.spoken_languages.map(lang => (
                <li key={lang.name}>
                  {lang.name}
                </li>
              ))}
            </ul></td></tr>
            <tr>
              <th>Production Companies <Icon name="factory"></Icon></th>
              <td><ul>
              {movie.production_companies.map(pdc => (
                <li key={pdc.name}>
                  {pdc.name}
                </li>
              ))}
              </ul></td>
            </tr>
            <tr>
              <th>Production Countries <Icon name="flag"></Icon></th>
              <td><ul>
              {movie.production_countries.map(pc => (
                <li key={pc.name}>
                  <Flag name={pc.iso_3166_1.toLowerCase()} />{pc.name}
                </li>
              ))}
              </ul></td>
            </tr>
          </tbody>
        </table>
      </Grid.Column>
    </Grid>

    <Divider vertical><span>Details</span></Divider>
    </Segment>
    <Divider horizontal><span><h2>Similar Movies</h2></span></Divider>
    {<Card.Group onClick={sleep(100)}>{movieCards}</Card.Group>}

    </>
  )};



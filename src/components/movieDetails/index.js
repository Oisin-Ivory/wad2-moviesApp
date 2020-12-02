import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { getRecommendations } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import Movie from "../recommendedCard/";

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
    console.log("REFRESHING");
    getRecommendations(movie.id).then(recommendeds => {
      setRecommended(recommendeds);
    });
  }

  return (
    
    <>
      
    <div style={{color:"white"}}>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
        <table class="table table-dark">
          <tbody>
            <tr>
              <th>Runtime</th>
              <td>{movie.runtime}</td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <th>Genres</th>
              <td><ul>
              {movie.genres.map(g => (
                <li key={g.name}>
                  {g.name}
                </li>
              ))}
              </ul></td>
            </tr>
            <tr>
              <th>Spoken Languages</th>
              <td><ul>
              {movie.spoken_languages.map(lang => (
                <li key={lang.name}>
                  {lang.name}
                </li>
              ))}
            </ul></td></tr>
            <tr>
              <th>Production Companies</th>
              <td><ul>
              {movie.production_companies.map(pdc => (
                <li key={pdc.name}>
                  {pdc.name}
                </li>
              ))}
              </ul></td>
            </tr>
            <tr>
              <th>Production Countries</th>
              <td><ul>
              {movie.production_countries.map(pc => (
                <li key={pc.name}>
                  {pc.name}
                </li>
              ))}
              </ul></td>
            </tr>
          </tbody>
        </table>
        <div style={{marginBottom:15}}>
        <h2>Similar Movies</h2>
        <div>
        <div onClick={sleep(100)} className="row rounded movies" style={{backgroundColor:"#3B3B3B"}}>{movieCards}</div>
        </div>
        
      </div>
      </div>
      
    </>
  )};



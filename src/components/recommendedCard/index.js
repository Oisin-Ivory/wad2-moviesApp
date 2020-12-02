import React from "react";
import { Link } from "react-router-dom";
import "./recommendedCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecommendedCard = ({movie, action}) => {
  return (
    <div className="col-sm-3">
      <div className="card text-white bg-dark" style={{paddingTop:15}}>
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon style={{color:"#5ea374"}} icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon style={{color:"#e1d667"}} icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
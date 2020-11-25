import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchLater = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchLater = e => {
    e.preventDefault();
    context.addToWatchLater(movie.id);
  };
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={handleAddToWatchLater}
    >
      Add to Watch Later
    </button>
  );
};

export default AddToWatchLater;
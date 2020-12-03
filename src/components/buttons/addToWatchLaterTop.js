import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {Button } from 'semantic-ui-react'

const AddToWatchLaterTop = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchLaterTop = e => {
    e.preventDefault();
    context.addToWatchLaterTop(movie.id);
  };
  return (
    <Button
    inverted color='violet'
      onClick={handleAddToWatchLaterTop}
    >
      Add to Watch Later
    </Button>
  );
};

export default AddToWatchLaterTop;
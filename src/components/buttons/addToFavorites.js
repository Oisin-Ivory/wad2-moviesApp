import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {Button } from 'semantic-ui-react'
const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <Button inverted color='blue'
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </Button>
  );
};

export default AddToFavoriteButton;
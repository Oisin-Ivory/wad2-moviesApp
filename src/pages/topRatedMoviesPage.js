import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchLater from '../components/buttons/addToWatchLater'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("watchlater" in m);
  });
  
  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchLater movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;
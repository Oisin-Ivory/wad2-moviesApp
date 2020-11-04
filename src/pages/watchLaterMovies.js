import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchLaterMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlater = context.movies.filter( m => m.watchlater)
  return (
    <MovieListPageTemplate
      movies={watchlater}
      title={"Watch Later Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchLaterMoviesPage;
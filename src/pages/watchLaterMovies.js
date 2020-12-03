import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { Divider } from "semantic-ui-react";

const WatchLaterMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlater = context.upcoming.filter(m => m.watchlater)
  const watchlaterTopRated = context.toprated.filter(m => m.watchlater)

  return (
    <>
    <MovieListPageTemplate
      movies={watchlater}
      title={"Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    <Divider horizontal><span style={{color:"white"}}>Top Rated Movies</span></Divider>
    <MovieListPageTemplate
      movies={watchlaterTopRated}
      title={"Top Rated Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    </>
  );
};

export default WatchLaterMoviesPage;
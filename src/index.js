
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import upComingMoviesPage from './pages/upComingMoviesPage'
import topRatedMoviesPage from './pages/topRatedMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import WatchLaterMoviePage from "./pages/watchLaterMovies";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider>
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={upComingMoviesPage} />
          <Route exact path="/movies/toprated" component={topRatedMoviesPage} />
          <Route exact path="/movies/watchlater" component={WatchLaterMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
# Assignment 1 - ReactJS app.

Name: ... Oisín Ivory ...

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - ......Added a new tab 'TopRated Movies', which displays the top rated movies from TMDB ..... 
 + Feature 2 - ......Added to the MovieDetails section which now displays recommended movies based on the one you're previewing ..... 
 + Feature 3 = ......Added a new view, recommended cards which are used to display recommended movies ..... 
 + Feature 4 = ......Added a new view, actorsView, which displays a list of actors based on a movie ..... 
 + Feature 5 = ......Added SemanticUI support and changed displays ..... 

## Setup requirements (If required).

...... Go to route folder and make an .env file with a TMDB API key in this format : 'EACT_APP_TMDB_KEY=<yourkey>', then navigate to the app's source folder and run npm install to get dependencies ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies
+ https://api.themoviedb.org/3/movie/${id}/recommendations - get a list of recommended movies based on a specific movie
+ https://api.themoviedb.org/3/movie/${id}/credits - get a list of a movies cast for a specific movie
      

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories0]
![][stories1]
![][stories2]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieHome]
>New semantic card layout that shows movie rating out of 10 with use of semantics' Rating, also new filter bar layout which makes use of semantic

![][movieDetail0]
>Overview now gives details about the movie rating, also gives an over and has a table of details. Production countries makes use of semantics Flags to display the countries flag. Below is similar moves, one of them is hovered over revealing a short overview no more than 4 lines and a button to view more detials

![][movieDetail1]
>Now displays a grided list of actors, and also displays a picture of them if it's available. Reviews section has a new button and a semantic table.

![][review]
>Shows the full text for a movie review aswell as the author of the review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ etc.
+ etc.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking the image displayed on the card redirects you to the movie's detail page.

![][cardLinkRecommended]
> Hovering over a recommended card, reveals some information about the movie, and it then allows you to click View Movie Details to go to the movie.

![][reviewLink]	
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).
I had used semantic ui in web App 1 so I searched how and followed the steps on the react website (https://react.semantic-ui.com/usage)

---------------------------------

[model]: ./data.jpg
[movieHome]: ./public/Updated_Cards.png
[movieDetail0]: ./public/Updated_MovieDetails_Top.png
[movieDetail1]: ./public/Updated_MovieDetails_Bottom.png
[review]: ./public/Updated_Review_Section.png
[reviewLink]: ./public/Updated_MovieDetails_Review.png
[cardLink]: ./public/Card_Regular_Link.png
[cardLinkRecommended]: ./public/Card_Recommended_Link.png
[stories0]: ./public/Storybook_Actors.PNG
[stories1]: ./public/Storybook_RecommendedMovie_Hover.PNG
[stories2]: ./public/Storybook_RecommendedMovie_noHover.PNG
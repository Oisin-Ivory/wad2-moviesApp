import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);
  return (
    <table style={{color:"white"}} className="table table-dark table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.author}</td>
                <td>{excerpt(r.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie
                      }
                    }}
                  >
                  <Button inverted color="orange">
                  
                    Full Review
                  
                  </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
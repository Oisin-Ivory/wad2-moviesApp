import React from "react";
import { Link } from "react-router-dom";
import {Button } from 'semantic-ui-react'
const ReviewButton = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
    <Button inverted color='olive'>
      Write a Review
    </Button>
    </Link>
  );
};

export default ReviewButton;
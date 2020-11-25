import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default ({ review }) => {
  return (
    <>
    <div class="jumbotron jumbotron-fluid" style={{color:"white"}}>
      <div class="container">
        <h1 class="display-4" style={{textDecoration:"underline"}}>{review.author}</h1>
        <p class="lead">{review.content}</p>
      </div>
    </div>
    </>
  );
};
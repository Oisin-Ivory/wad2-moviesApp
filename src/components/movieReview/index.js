import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Header, Container, Divider } from 'semantic-ui-react'

export default ({ review }) => {
  return (
    <>
    <br></br>
  <Container textAlign="justified">
    <Header as='h2'><span style={{color:"white"}}>{review.author}</span></Header>
    <Divider />
    <p style={{color:"white"}}>
      {review.content}
    </p>
    </Container>
    </>
  );
};
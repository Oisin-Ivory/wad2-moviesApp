import React, {useContext } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import {Form,TextArea, Button } from 'semantic-ui-react'

const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
  };

  return (
    <div>
    <h3>Add your review</h3>
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <input type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={movie.review ? movie.review.author : ""}
          name="author"
          ref={register({ required: "Author name required" })} />
    </Form.Field>
    {errors.author && <p id="errortext">{errors.author.message} </p>}
    <Form.Field>
    <textarea rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={movie.review ? movie.review.content : ""}
          name="content"
          ref={register({ required: "No review text", minLength: { value: 10, message: "Review is too short" }
          })} />
              {errors.content && (
        <p id="errortext">{errors.content.message} </p>
      )}
    </Form.Field>

    <Button type="submit" inverted color='green' style={{marginRight:15}} className="btn btn-outline-secondary">Submit</Button>
    <Button  type="reset"
    inverted color='red'
        className="btn btn-outline-secondary"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}>Reset</Button>
 
    </Form>
    </div>
  );
};

export default withRouter(ReviewForm);
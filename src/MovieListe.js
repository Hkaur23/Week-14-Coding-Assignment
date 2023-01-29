import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Add from "./Add";
import Comments from "./Comments";
const MovieListe = ({ movies ,addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return ( 
    <div>
      <div >
        <Button id="add" onClick={handleShow}>Add</Button>
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
      </div>
      {movies.map((el) => (
        <MovieCard movie={el} />
      ))}

      <Comments />
    </div>
  );
};

export default MovieListe;

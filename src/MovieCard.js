import React from "react";

import { Rating } from 'react-simple-star-rating';

const MovieCard = ({ movie }) => {
 
  return (
    <div>
      <div class="movie_card" id="bright"  >
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={movie.img} alt=""/>
            <h1 >{movie.title}</h1>
            <Rating  ratingValue={movie.rate} /* Rating Props */ />
            <h4>{movie.date}</h4>
            <p class="type">{movie.genre}</p>
          </div>
          <div class="movie_desc">
            <p class="text">{movie.description}</p>
          </div>
          <button className >
            View Details
        </button>
        </div>
        <div class="blur_back  "></div>
      </div>
    </div>
  )
}

export default MovieCard


import React from "react";
import {Link} from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w500/";
const setVoteClass = vote => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
function Movie(props);

const Movie = ({id, title, poster_path, overview, vote_average })  => ( 
  <div className="movie image-container overlay">

    <img
      src={
        poster_path
          ? IMG_API + poster_path
          : "https://images.unsplash.com/photo-1609936968684-36b55c06ab7a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      }
      alt={title}
    />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{overview}</p>
       <Link to={`/movie/${id}`} className="btn btn-dark">Detay</Link>
    </div>
  </div>
);


export default Movie;

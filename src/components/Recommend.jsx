import React from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Recommend = ({ recommend }) => {
  console.log(recommend);
  const setVoteClass = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <>
      {recommend.map(movie => {
        return (
          <div className="d-inline-flex mt-5 p-2">
            <div className="movie image-container overlay">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={`tag ${movie.vote_average}`}>
                  {movie.vote_average}
                </span>
              </div>
              <div className="movie-over">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Recommend;

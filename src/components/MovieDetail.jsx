import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "./components/Movie";

export default function MovieDetail(props){

  const [movie, setMovie] = useState([]);
  const { movieID } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=3438470ee272e3ad7921f6c925ffb1a5&language=en-US`
    )
      .then(response => response.json())
      .then(data => setMovie(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=3438470ee272e3ad7921f6c925ffb1a5&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setSimilarMovies(data.results);
      });
  }, []);
  

  return (
    <div className="col-sm-6 offset-sm-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {movie.title}
          </li>
        </ol>
      </nav>
      <div className="col-lg-6">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <h1>{movie.title}</h1>
        <p className="text">{movie.overview}</p>
        <p>{movie.vote_average}</p>
      </div>

      <div>
        <h1 className="similar-text">Similar Movies
        <span>🎬</span></h1>
        <p className="row">
          {similarMovies.map(movie => {
            return (
             
              <div className="col-lg-4 col-sm-12">
                <h4 className="titles">{movie.title}</h4>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <p className="vote">{movie.vote_average}</p>
                </div>
             
              
            );
          })}
        </p>
      </div>
    </div>
  );
}

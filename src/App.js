import React from "react";
import "./style.css";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CharactersDetail from "./CharactersDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MovieDetail from "./components/MovieDetail";
import Recommend from "./components/Recommend";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  const FEATURED_API =
    "https://api.themoviedb.org/3/movie/popular?api_key=3438470ee272e3ad7921f6c925ffb1a5&language=en-US&page=1";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=3438470ee272e3ad7921f6c925ffb1a5&query=/";

  const RECOMMEND_API =
    "https://api.themoviedb.org/3/movie/464052/recommendations?api_key=3438470ee272e3ad7921f6c925ffb1a5&language=en-US&page=1";

  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    getRecommend(RECOMMEND_API);
  }, []);

  const getRecommend = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setRecommend(data.results);
      });
  };

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <>
            <header>
              <form onSubmit={handleOnSubmit}>
                <input
                  className="search"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleOnChange}
                />
              </form>
            </header>

            <div className="movie-container">
              {movies.length > 0 &&
                movies.map(movie => <Movie key={movie.id} {...movie} />)}
            </div>
          </>
        </Route>
        <Route path="/movie/:movieID">
          <MovieDetail />
        </Route>
        <Route path="/recommend">
          <Recommend recommend={recommend} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

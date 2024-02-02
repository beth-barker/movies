import React from "react";
import { useState } from "react";
import "../styles/movies.css";
import MovieCard from "../components/MovieCard";
import movieData from "../data/movies-250.json";
import Search from "../components/SearchInput";
import Genre from "../components/Genre";
import Rating from "../components/Rating";

function Movies(props) {
  let [movies, setMovies] = useState(movieData);

  function renderMovies() {
    return movies.map((movie, index) => {
      return <MovieCard movie={movie} key={index} />;
    });
  }

  function handleMovieSearch(searchTerm) {
    const results = movieData.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return setMovies(results);
  }

  function ratingSearch(selection) {
    const ratingResults = movieData.filter(
      (movie) => movie.Rated === selection
    );
    console.log(selection);
    return setMovies(ratingResults);
  }

  function genreSearch(gSelected) {
    const gResults = movieData.filter((movie) =>
      movie.Genre.includes(gSelected)
    );
    console.log(gSelected);
    return setMovies(gResults);
  }

  //function resetSearch() {}

  return (
    <div>
      <div>
        <h1>Movies</h1>
        <Search placeholder="Search Movies" onSearch={handleMovieSearch} />
        <br />
        <Genre onChange={genreSearch} />
        <Rating onChange={ratingSearch} />
      </div>
      <div className="cards">{renderMovies()}</div>
    </div>
  );
}

export default Movies;

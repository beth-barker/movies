import React from "react";
import Search from "../components/SearchInput";
import Genre from "../components/Genre";
import Rating from "../components/Rating";
import profileMovie from "../data/profileMovies.json";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../styles/movies.css";

function Profile(props) {
  const [profMovie, setProfMovies] = useState(profileMovie);
  const [watched, setWatched] = useState("True");

  function renderMovies() {
    return profMovie.map((movie, index) => {
      return movie.Watched != watched ? null : (
        <MovieCard movie={movie} key={index} />
      );
    });
  }

  function handleMovieSearch(searchTerm) {
    const results = profileMovie.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return setProfMovies(results);
  }

  function ratingSearch(selection) {
    const ratingResults = profileMovie.filter(
      (movie) => movie.Rated === selection
    );
    console.log(selection);
    return setProfMovies(ratingResults);
  }

  function genreSearch(gSelected) {
    const gResults = profMovie.filter((movie) =>
      movie.Genre.includes(gSelected)
    );
    console.log(gSelected);
    return setProfMovies(gResults);
  }

  return (
    <div>
      {watched === "True" ? (
        <h1>Beth's Watched Movies</h1>
      ) : (
        <h1>Beth's Movies to Watch</h1>
      )}
      <button
        onClick={() => {
          setWatched("True");
        }}
      >
        Watched
      </button>
      <button
        onClick={() => {
          setWatched("False");
        }}
      >
        Want to Watch
      </button>
      <Search onSearch={handleMovieSearch} />
      <Genre onChange={genreSearch} />
      <Rating onChange={ratingSearch} />
      <div className="cards">{renderMovies()}</div>
    </div>
  );
}

export default Profile;

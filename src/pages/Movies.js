import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import "../styles/movies.css";
import MovieCard from "../components/MovieCard";
import movieData from "../data/movies-250.json";

function Movies(props) {
  let [search, setSearch] = useState("");
  let [movies, setMovies] = useState(movieData);

  const rawMovieData = movieData;

  console.log(movies);

  function getAllMovies() {
    setMovies(movieData);
  }

  function renderMovies() {
    return movies.map((movie, index) => {
      return <MovieCard movie={movie} />;
    });
  }

  const genreArr = [
    "Romance",
    "Horror",
    "Comedy",
    "Thriller",
    "Action",
    "Crime",
    "Classics",
    "Sports",
    "Holiday",
  ];

  function searchMovies() {
    return movieData.filter((movie, index) => {
      let movieTitle = movie.Title.toLowerCase();
      let searchParams = search.toLowerCase();
      console.log(searchParams);
      return movieTitle.includes(searchParams);
    });
  }

  function setSearchMovies(term) {
    setSearch(term);
    setMovies(searchMovies());
  }

  console.log(search);

  //Search input component, remove search functionality, create the setMoviesFunc to set the movies that are returned by the search input. Extractiing lines 38-50. Componentizing search

  return (
    <div>
      <div>
        <h1>Movies</h1>
        {/* <SearchInput movies={movieData} setMovies={(movies) => setMoviesFunc(movies) } /> */}
        <input
          type="text"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearchMovies(e.target.value)}
        />
        <br />
        <select>
          <option hidden>Genre</option>
          {genreArr.map((genre, index) => (
            <option key={index}>{genre}</option>
          ))}
        </select>
        <select name="" id="">
          <option hidden>Rating</option>
          <option value="">G</option>
          <option value="">PG</option>
          <option value="">PG-13</option>
          <option value="">R</option>
        </select>
      </div>
      <div className="cards">{renderMovies()}</div>
    </div>
  );
}

export default Movies;

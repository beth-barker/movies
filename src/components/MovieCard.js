import React from "react";
import "../styles/movies.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card" key={movie.Title}>
      <p className="movie-title">{movie.Title}</p>
      <div className="movie-content">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
        <div className="movie-info">
          <p>{movie.Rated}</p>
          <p>{movie.Year}</p>
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
        </div>
      </div>
      <div className="movie-btns">
        <button>Watched</button>
        <button>Want to Watch</button>
      </div>
    </div>
  );
}

export default MovieCard;

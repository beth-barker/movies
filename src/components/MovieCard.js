import React from "react";
import "../styles/movies.css";

function MovieCard({ movie, index }) {
  function addToWatched() {
    alert(`Please rate ${movie.Title}`);
  }

  function wantToWatch() {
    alert(`${movie.Title} added to your watchlist`);
    //if movie title is not already on watchlist, add to profile
    //if it is on watch list then alert that it's already on profile
  }

  function showBtns() {
    if (movie.Watched === "True") {
      return (
        <div className="movie-btns">
          <p>Personal Rating: {movie.Rating} </p>
        </div>
      );
    } else if (movie.Watched === "False") {
      return (
        <div className="movie-btns">
          <button onClick={addToWatched}>Watched</button>
        </div>
      );
    } else {
      return (
        <div className="movie-btns">
          <button onClick={addToWatched}>Watched</button>
          <button onClick={wantToWatch}>Want to Watch</button>
        </div>
      );
    }
  }

  return (
    <div className="movie-card" key={index}>
      <div className="poster-view">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-content">
        <div className="movie-info">
          <p className="movie-title">{movie.Title}</p>
          <br />
          <div className="movie-facts">
            <p className="year">{movie.Year}</p>
            <p className="year">{movie.Runtime}</p>
            <p>{movie.Rated}</p>
          </div>
        </div>
      </div>
      {showBtns()}
    </div>
  );
}

export default MovieCard;

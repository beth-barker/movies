import { React, useState, useEffect } from "react";
import profileMovie from "../data/profileMovies.json";
import "../styles/previewBar.css";

function PreviewWatched(props) {
  //filter through all profile movies and return only movies that have been watched
  let watchedMovies = profileMovie.filter((watchedMov) => {
    return watchedMov.Watched === "True";
  });

  console.log("watched array", watchedMovies);

  //define state to be changed when a random list of movies is created
  const [randomMovies, setRandomMovies] = useState([]);

  //function to loop through the wathced movies array, define a random index number and switch out the orignal index with the new randomized index, return newly indexed array
  function shuffleArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randIndex]] = [array[randIndex], array[i]];
    }
    return array;
  }

  //pass in the correct array to ShuffleArr function and after array has been randomized, take the first three objects from the array and store in new variable
  function getRandomMovie() {
    const shuffledMovies = shuffleArr(watchedMovies);
    const randMovies = shuffledMovies.slice(0, 3);
    return randMovies;
  }

  //assign the getRandomMovie function to a variable to be used in the useEffect
  const newRandomMovies = getRandomMovie();

  //when the newRanomMovies array is updated, rerender the page, run each previous function, and set the state to our randomized movie array
  useEffect(() => {
    setRandomMovies(newRandomMovies);
  }, newRandomMovies);

  return (
    <div>
      {randomMovies.map((movie) => {
        return (
          <div className="p-cards">
            <div className="p-poster">
              <img src={movie.Poster} alt="" className="p-poster-view" />
            </div>
            <div className="p-info">
              <h4 className="p-movie-title">{movie.Title}</h4>
              <p>Your Rating: {movie.Rating}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PreviewWatched;

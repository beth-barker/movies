import { React, useState, useEffect } from "react";
import profileMovie from "../data/profileMovies.json";
import "../styles/previewBar.css";

function PreviewToWatch(props) {
  let toWatchMovies = profileMovie.filter((toWatch) => {
    return toWatch.Watched === "False";
  });

  console.log("towatch array", toWatchMovies);

  //define state to be changed when a random list of movies is created
  const [randToWatch, setRandToWatch] = useState([]);

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
    const shuffledMovies = shuffleArr(toWatchMovies);
    const randMovies = shuffledMovies.slice(0, 3);
    return randMovies;
  }

  //assign the getRandomMovie function to a variable to be used in the useEffect
  const newRandomMovies = getRandomMovie();

  //when the newRanomMovies array is updated, rerender the page, run each previous function, and set the state to our randomized movie array
  useEffect(() => {
    setRandToWatch(newRandomMovies);
  }, newRandomMovies);

  return (
    <div>
      {randToWatch.map((movie) => {
        return (
          <div className="p-cards">
            <div className="p-poster">
              <img src={movie.Poster} alt="" className="p-poster-view" />
            </div>
            <div className="p-info">
              <h4 className="p-movie-title">{movie.Title}</h4>
              <button>Watched</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PreviewToWatch;

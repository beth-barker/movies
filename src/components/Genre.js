import { React, useState } from "react";

function Genre(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const genreArr = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Crime",
    "Drama",
    "Family",
    "Film-Noir",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    props.onChange(event.target.value);
    //reset rating and search
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option hidden>Genre</option>
        {genreArr.map((genre, index) => (
          <option key={index}>{genre}</option>
        ))}
      </select>
    </div>
  );
}

export default Genre;

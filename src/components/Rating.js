import { React, useState } from "react";

function Rating(props) {
  const [selectRating, setSelectRating] = useState("");

  function handleSelection(selection) {
    setSelectRating(selection.target.value);
    props.onChange(selection.target.value);
  }

  return (
    <div>
      <select value={selectRating} onChange={handleSelection}>
        <option value="" hidden>
          Rating
        </option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="Unrated">Unrated</option>
      </select>
    </div>
  );
}

export default Rating;

import { React, useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term) {
    setSearchTerm(term);
    props.onSearch(term);
  }

  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

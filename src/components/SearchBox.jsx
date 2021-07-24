import React from "react";
import "../App.css";

const SearchBox = (props) => {
  return (
    <div className="searchbox">
      <input
        className="form-control"
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Enter movie name"
      ></input>
    </div>
  );
};

export default SearchBox;

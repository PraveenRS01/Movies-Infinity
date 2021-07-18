import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.SearchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type the name of a movie..."
      ></input>
    </div>
  );
};

export default SearchBox;

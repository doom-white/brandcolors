import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  return (
    <div className="search">
      <div className="search-icon">
        <GrSearch />
      </div>
      <input type="text" placeholder="Search Brands" />
    </div>
  );
};

export default Search;

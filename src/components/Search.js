import React, { useContext } from "react";
import { GrSearch } from "react-icons/gr";
import MainContext from "../MainContext";

const Search = () => {
  const { setSearched } = useContext(MainContext);
  return (
    <div className="search">
      <div className="search-icon">
        <GrSearch />
      </div>
      <input
        type="text"
        onChange={(e) => setSearched(e.target.value.toLowerCase())}
        placeholder="Search Brands"
      />
    </div>
  );
};

export default Search;

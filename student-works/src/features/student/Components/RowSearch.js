import React from "react";
import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { studentsSearch, clearSearch } from "../studentSlice";
import "../style/search.css";

function RowSearch() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSearch = () => {
    dispatch(studentsSearch(search));
  };

  return (
    <div className="search">
      <input
        id="search"
        className="search-input"
        placeholder="Search by name"
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
      />
      <button type="button" className="button-search" onClick={handleSearch}>
        <Search className="search-icon" />
      </button>
    </div>
  );
}

export default RowSearch;

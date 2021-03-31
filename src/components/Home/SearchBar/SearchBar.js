import React from 'react';
import './SearchBar.css'
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
    return (
        <div className="search-bar">
      <div className="container">
      <form className="form-inline d-flex justify-content-center">
    <input className="searchInput" 
    type="search"
     placeholder="Search Valley" 
     aria-label="Search"/>
     {/* <FiSearch className="searchIcon"/> */}
    <button className="btn searchBtn" type="submit">Search</button>
  </form>
      </div>
        </div>
    );
};

export default SearchBar;
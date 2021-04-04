import React, { useContext } from 'react';
import './SearchBar.css'
import { FiSearch } from "react-icons/fi";
const SearchBar = ({handleSearch}) => {

 
    return (
        <div className="search-bar py-4">
      <div className="container">
      <form className="form-inline d-flex justify-content-center">
    <input className="searchInput" 
    type="search"
     placeholder="Search Product" 
     onBlur={handleSearch}
     aria-label="Search"/>
    
     {/* <FiSearch className="searchIcon"/> */}
    <button className="btn searchBtn" type="submit">Search</button>
  </form>
      </div>
        </div>
    );
};

export default SearchBar;
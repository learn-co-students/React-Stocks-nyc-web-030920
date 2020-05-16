import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="Radio" value="Alphabetically" checked={null} onChange={(event) => props.changeSortBy(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="Radio" value="Price" checked={null} onChange={(event) => props.changeSortBy(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.changeFilterBy(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

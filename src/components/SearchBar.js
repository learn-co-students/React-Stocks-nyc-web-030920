import React from 'react';

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortBy === "" ? false : props.sortBy === "Alphabetically" ? true : false} 
        onChange={props.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortBy === "" ? false : props.sortBy === "Price" ? true : false} 
        onChange={props.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

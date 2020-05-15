import React from 'react';

const SearchBar = (props) => {

  const runSort = event => {
    // console.log("running sort", event.target.value);
    props.runSort(event.target.value);
  }

  const runFilter = event => {
    // console.log("running filter", event.target.value)
    props.runFilter(event.target.value);
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked={null} onChange={runSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="Price" checked={null} onChange={runSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={runFilter}>
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

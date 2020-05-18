import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="Alphabetically" type="radio" value="Alphabetically" checked={props.state.Alphabetically} onChange={props.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input name="Price" type="radio" value="Price" checked={props.state.price} onChange={props.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name='kind'value={props.state.kind}onChange={props.handleChange}>
          <option  value="Tech">Tech</option>
          <option  value="Sportswear">Sportswear</option>
          <option  value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

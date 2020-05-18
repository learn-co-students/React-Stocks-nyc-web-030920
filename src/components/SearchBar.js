import React from 'react';

const SearchBar = (props) => {
  return (


    
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name='sort' value='Alphabetically' checked={props.sort==='Alphabetically'} onChange={props.handleChange}/>
        Alphabetically {props.sort==='Alphabetically'?'yes':'no'}
      </label>
      <label>
        <input type="radio" name='sort' value="Price" checked={props.sort==='Price'} onChange={props.handleChange}/>
        Price {props.sort==='Price' ? 'yes':'no'}
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name='filter' value={props.filter}  onChange={props.handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      sort:{props.filter}

    </div>
  );
}


export default SearchBar;

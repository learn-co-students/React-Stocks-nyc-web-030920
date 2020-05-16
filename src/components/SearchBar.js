import React from 'react';

class SearchBar extends React.Component {
  // state = { 
  //   checked: false
  // }

  // handleUserInput = () => {
  //   this.setState
  // }

  render() { 
    return (  
      <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetically" checked={null} onChange={(event) => this.props.sortStock(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={null} onChange={(event) => this.props.sortStock(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => this.props.filterStocks(event.target.value)}>
          <option value='All'>All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
    );
  }
}
 
export default SearchBar;



import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Corn Stocks</h2>
        {this.props.stocks.map((stock,index) => <Stock clickHandler={this.props.buyStock} key={index} {...stock}/>)}
      </div>
    );
  }

}

export default StockContainer;
 
import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log("stockContainer this.props", this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
          {this.props.stocks.map((stock, index) => 
            <Stock name="stock" buyStock={this.props.buyStock} stock={stock} key={index}/>
          )}
      </div>
    );
  }

}

export default StockContainer;

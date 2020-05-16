import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log('Stock Container Props', this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map((stock, index) => <Stock stock={stock} key={index} buyStock={this.props.buyStock} sellStock={this.props.sellStock}/>)}
      </div>
    );
  }

}

export default StockContainer;

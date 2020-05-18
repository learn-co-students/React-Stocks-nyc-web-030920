import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  

  render() {
    console.log( this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.allStocks.map((stock)=>{
          return<Stock  key={stock.id} {...stock} />
        
        })
         
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;

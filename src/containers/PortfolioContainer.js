import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.stocks.map(stock => {
              return <Stock key={stock.id} {...stock} handleStockClick={this.props.sellStock} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;

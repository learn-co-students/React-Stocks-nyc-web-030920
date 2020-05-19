import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderPurchasedStocks = () => {
    return this.props.purchasedStocks.map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderPurchasedStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;

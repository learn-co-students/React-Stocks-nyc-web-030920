import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log("portfolioContainer props:", this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.portfolioStocks.map((stock, index) =>
          <Stock sellStock={this.props.sellStock} name="portfolio-stock" stock={stock} key={index}/>
        )}
      </div>
    );
  }

}

export default PortfolioContainer;

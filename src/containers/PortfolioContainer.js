import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  render() {
    console.log('Portfolio Props', this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map((stock, index) => <Stock stock={stock} key={index} sellStock={this.props.sellStock}/>)}
          
      </div>
    );
  }

}

export default PortfolioContainer;

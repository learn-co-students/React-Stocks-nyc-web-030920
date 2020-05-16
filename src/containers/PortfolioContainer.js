import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Corn Portfolio</h2>
          {this.props.ownedStocks.map((stock,index) => <Stock clickHandler={this.props.sellStock} key={index} {...stock} />)
            // <Stock />
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
 
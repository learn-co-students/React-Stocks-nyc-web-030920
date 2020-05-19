import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {

    return (
      <div>
        <SearchBar
        handleChange={this.props.handleChange}
        sortBy={this.props.sortBy}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer 
            stocks={this.props.stocks}
            handlePurchase={this.props.handlePurchase}
            sortBy={this.props.sortBy}
            filter={this.props.filter}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer 
            purchasedStocks={this.props.purchasedStocks}
            handlePurchase={this.props.handlePurchase}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;

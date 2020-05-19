import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.sortBy === "Alphabetically"){
      return (
        this.props.stocks.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          } else {
            return 1
          }
        }).map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    } else if (this.props.sortBy === "Price") {
      return (
        this.props.stocks.sort((a, b) => {
          if (a.price < b.price) {
            return -1
          } else {
            return 1
          }
        }).map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    } else if (this.props.filter === "Tech") {
      return (
        this.props.stocks.filter(stock => stock.type === "Tech").map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    } else if (this.props.filter === "Sportswear") {
      return (
        this.props.stocks.filter(stock => stock.type === "Sportswear").map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    } else if (this.props.filter === "Finance") {
      return (
        this.props.stocks.filter(stock => stock.type === "Finance").map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    } else {
      return (
        this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />)
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;

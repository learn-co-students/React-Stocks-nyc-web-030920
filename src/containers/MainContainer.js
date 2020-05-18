import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'




class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    sortedStocks: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`, {
      })
      .then(response => response.json())
      .then(json => this.setState({stocks: json, sortedStocks: json}))
  }

  buyStock = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }
  sellStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock)
    })
  }

  sortStocks = (sortBy) => {
    let sortedArray = []
    switch(sortBy){
      case "Alphabetically":
        sortedArray = this.state.sortedStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
        sortedArray = this.state.sortedStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("Something is messed up")
    }
    this.setState({
      sortedStocks: sortedArray
    })
  }

  filterStocks = (filter) => {
    if(filter !== "All"){
      this.setState({
        sortedStocks: this.state.stocks.filter(stock => stock.type === filter)
      })
    } else {
      this.setState({
        sortedStocks: this.state.stocks
      })
    }
  }

  render() {
    // console.log("🍖",this.state)
    

    return (

      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>
          <div className="row">
            <div className="col-8">
              <StockContainer buyStock={this.buyStock} stocks={this.state.sortedStocks} portfolioStocks={this.state.portfolioStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} portfolioStocks={this.state.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

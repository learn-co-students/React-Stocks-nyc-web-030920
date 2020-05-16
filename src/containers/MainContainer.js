import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const ENDPOINT = "http://localhost:3000/stocks"
class MainContainer extends Component {
  state = {
    stocks: [],
    ownedStocks: [],
    filteredStocks: [],
    sortBy: "",
    filterBy: "All"
  }

  componentDidMount(){
    this.getStocks()
  }

  sortStocksByTicker = () => {
    this.state.stocks.sort((a,b)=> a.ticker < b.ticker ? -1 : 1)
    this.state.ownedStocks.sort((a,b)=> a.ticker < b.ticker ? -1 : 1)
  }

  sortStocksByPrice = () => {
    this.state.stocks.sort((a,b) => a.price < b.price ? 1 : -1)
    this.state.ownedStocks.sort((a,b) => a.price < b.price ? 1 : -1)
  }

  filterBy = () => {
    if (this.state.filterBy === "All") {
      let stocks = this.state.stocks
      return stocks}
    else {
    let stocks =  this.state.stocks.filter(stock => stock.type === this.state.filterBy)
  return stocks}
  }

  changeFilterBy = (value) => {
    this.setState({filterBy: value})
  }

  changeSortBy = (value) => {
    this.setState({sortBy: value})
  }

  getStocks = () => {
    fetch(ENDPOINT).then(resp => resp.json()).then(data => this.setState({stocks: data}, this.setState({filteredStocks: data})))
  }

  buyStock = (id) => {
    let boughtStock = this.state.stocks.filter(stock => stock.id === id)
    this.setState({ownedStocks: this.state.ownedStocks.concat(boughtStock)})
    let stocksLeft = this.state.stocks.filter(stock => stock.id !== id)
    this.setState({stocks: stocksLeft})
  }

  sellStock = (id) => {
    //we need to go through our state ownedStocks and remove the stock that matches id
    // Ends up selling all stocks with same id. Deliverables unclear. 
    // Are we supposed to be allowed to buy multiple of same stocks to begin with?
    let soldStock = this.state.ownedStocks.filter(stock => stock.id === id)
    this.setState({stocks: this.state.stocks.concat(soldStock)})
    let stocksLeft = this.state.ownedStocks.filter(stock => stock.id !== id)
    this.setState({ownedStocks: stocksLeft})
  }

  render() {
    if (this.state.sortBy !== "")
      if (this.state.sortBy === "Alphabetically") {
        this.sortStocksByTicker()
      }
      else if (this.state.sortBy === "Price") {
        this.sortStocksByPrice()
      }
      else null
 
    let filteredStocks = this.filterBy()
    return (
      <div>
        <SearchBar changeFilterBy={this.changeFilterBy} changeSortBy={this.changeSortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer buyStock={this.buyStock} stocks={filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} ownedStocks={this.state.ownedStocks}/>
 
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

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

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(data => this.setState({
      stocks: data,
      sortedStocks: data
    }))
  }

  buyStock = (stock) => {
    let currentStocks = [...this.state.portfolioStocks]
    if(currentStocks.includes(stock)){
      currentStocks = [...this.state.portfolioStocks]
    } else {
      currentStocks = [...this.state.portfolioStocks, stock]
    }
    this.setState({
      portfolioStocks: currentStocks
    })
  }

  sellStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(currentStock => currentStock !== stock)
    })
  }

  sortStock = (event) => {
    let sortArray = [...this.state.stocks]
    if (event === 'alphabetically'){
      sortArray.sort((a,b) => (a.ticker > b.ticker) ? 1 : -1)
    } else if (event === 'price') {
      sortArray.sort((a,b) => (a.price > b.price) ? 1 : -1)
    }
    this.setState({
      sortedStocks: sortArray
    })
  }

  filterStocks = (event) => {
    let filterArray = [...this.state.stocks]
    if(event !== 'All'){
      this.setState({
        sortedStocks: filterArray.filter(stock => stock.type === event)
      })
    } else {
      this.setState({
        sortedStocks: filterArray
      })
    }  
  }

  // filterStock = (event) => {
  //   let filterArray = [...this.state.stocks]
  //   if(event === 'Tech'){
  //     filterArray.filter(stock => stock.type === 'Tech')
  //   } else if (event === 'Sportswear') {
  //     filterArray.filter(stock => stock.type === 'Sportswear')
  //   } else if (event === 'Finance'){
  //     filterArray.filter(stock => stock.type === 'Finance')
  //   }
  //   this.setState({
  //     sortedStocks: filterArray
  //   })
  // }


  render() {
    
    return (
      <div>
        <SearchBar sortStock={this.sortStock} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.sortedStocks} buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

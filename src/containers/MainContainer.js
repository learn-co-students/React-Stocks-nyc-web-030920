import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const StockUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    selection: [],
    sortStocks: []
  }

  componentDidMount() {
    fetch(StockUrl)
    .then(res => res.json())
    .then(stocks => this.setState({ 
      stocks: stocks,
      sortStocks: stocks
     }))
  }

  addToSelection = (obj) => {
    if (!this.state.selection.includes(obj)) {
      this.setState({
        selection: [...this.state.selection, obj]
      })
    }
  }

  removeFromSelection = (id) => {
    this.setState({
      selection: this.state.selection.filter(stock => stock.id !== id)
    })
  }

  handleSortMethod = (type) => {
    if (type === 'Alphabetically') {
      //sort by name
      this.setState({
        sortStocks: this.state.sortStocks.sort((a, b) => a.name > b.name ? 1 : -1)
      })
    } else if (type === 'Price') {
      //sort by ascending price
      this.setState({
        sortStocks: this.state.sortStocks.sort((a, b) => a.price > b.price ? 1 : -1)
      })
    }
  }

  handleFilter = (type) => {
    let arr = [...this.state.stocks]
    if (type === 'Tech') {
      arr = arr.filter(stock => stock.type === 'Tech')
    } else if (type === 'Finance') {
      arr = arr.filter(stock => stock.type === 'Finance')
    } else if (type === 'Sportswear') {
      arr = arr.filter(stock => stock.type === 'Sportswear')
    }

    this.setState({
      sortStocks: arr
    })
  }

  render() {
    // console.log('MainCOntainer sort stock: ', this.state.sortStocks)
    console.log('Selection: ', this.state.selection)
    return (
      <div>
        <SearchBar sortMehod={this.handleSortMethod} filterType={this.handleFilter}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.sortStocks} buyStock={this.addToSelection}/>
            </div>
            <div className="col-4">

              <PortfolioContainer stockSelection={this.state.selection} sellStock={this.removeFromSelection}/>

            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer;

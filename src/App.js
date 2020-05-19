import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks'

class App extends Component {

  state ={
    stocks: [],
    purchasedStocks: [],
    sortBy: "",
    filter: ""
  }

  // upon mounting/ initial render will:
  // fetch stocks
  // update state
  // trigger rerender
  componentDidMount() {
    this.fetchStocks()
  }

  // fetch stocks
  fetchStocks = () => {
    return (
      fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        stocks: data
      }))
    )
  }

  handlePurchase = id => {
    let purchasedStock = this.state.stocks.find(stock => stock.id === id)

    // if stock has not been purchased, purchase it (add to portfolio)
    if (!this.state.purchasedStocks.includes(purchasedStock)){
      return this.setState({
        purchasedStocks: [...this.state.purchasedStocks, purchasedStock]
      })
    } else { // if stock has been purchased, sell it (remove from portfolio)
      return this.setState({
        purchasedStocks: [...this.state.purchasedStocks.filter(stock => stock.id !== purchasedStock.id )]
      })
    }
  }

  handleChange = event => {
    switch(event.target.value) {
      case "Alphabetically":
        this.setState({
          sortBy: "Alphabetically"
        })
        break
      case "Price":
        this.setState({
          sortBy: "Price"
        })
        break
      case "Tech":
        this.setState({
          filter: "Tech"
        })
        break
      case "Sportswear":
        this.setState({
          filter: "Sportswear"
        })
        break
      case "Finance":
        this.setState({
          filter: "Finance"
        })
        break
      default:
        // code block
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
        stocks={this.state.stocks}
        handlePurchase={this.handlePurchase}
        purchasedStocks={this.state.purchasedStocks}
        handleChange={this.handleChange}
        sortBy={this.state.sortBy}
        filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;

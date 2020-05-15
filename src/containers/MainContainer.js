import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    unownedStocks: [],
    portfolio: [],
    currentSort: null,
    currentFilter: "All"
  }

  componentDidMount(){
    console.log("COMPONENT MOUNT")
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      console.log("LOAD STOCKS", data);
      this.setState({unownedStocks: data});      
    })
    .catch(err => console.err("err", err));
  }

  runSort = (sortType) => {
    console.log("SORTING", sortType);
    this.setState({currentSort: sortType});
  }
  
  runFilter = (filterType) => {
    console.log("FILTERING", filterType);
    this.setState({currentFilter: filterType});
  }

  // get the stock object, grab the id from the dataset
  buyStock = id => {
    console.log("buy stock", id);
    if(id){
      const newUnowned = [];
      const newPortfolio = [...this.state.portfolio];
  
      this.state.unownedStocks.forEach(stock => {
        if(stock.id === id){
          newPortfolio.push(stock);
        }
        else{
          newUnowned.push(stock);
        }
      })

      this.setState({
        unownedStocks: newUnowned,
        portfolio: newPortfolio
      });
    }
  }
  
  sellStock = id => {
    console.log("sell stock", id);
    if(id){
      const newUnowned = [...this.state.unownedStocks];
      const newPortfolio = [];
  
      this.state.portfolio.forEach(stock => {
        if(stock.id === id){
          newUnowned.push(stock);
        }
        else{
          newPortfolio.push(stock);
        }
      })

      this.setState({
        unownedStocks: newUnowned,
        portfolio: newPortfolio
      });
    }
  }

  applyFilter(list){
    if(this.state.currentFilter !== "All"){
      const filtered = [];
      this.state.unownedStocks.forEach(stock => {
        if(stock.type === this.state.currentFilter){
          filtered.push(stock);
        }
      });
      return filtered;
    }
    return list;
  }

  applySort(list){
    if(this.state.currentSort){
      let sortToUse = null;
      if(this.state.currentSort === "Alphabetically"){
        sortToUse = this.alphaSort;
      }
      else if(this.state.currentSort === "Price"){
        sortToUse = this.priceSort;
      }

      return list.sort(sortToUse);
    }
    return list;
  }

  alphaSort(a, b) {
    return a.ticker.localeCompare(b.ticker);
  }

  priceSort(a, b) {
    return a.price - b.price
  }

  render() {

    // applying sorting and filtering
    const stocksToUse = this.applyFilter(this.applySort(this.state.unownedStocks));

    return (
      <div>
        <SearchBar runSort={this.runSort} runFilter={this.runFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocksToUse} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

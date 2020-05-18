import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state={
    stocks:[],
    portfolio:[],
    Alphabetically:false,
    Price:"",
    kind:''
    

  }
  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp=>resp.json())
    .then((data)=>{
this.setState({stocks:data})
    })
  }
  addPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }
  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(s => s !== stock) 
    })
  }
  handleChange=(event)=>{
    const{name,type,value,checked}=event.target
     this.setState({[name]:value})


  }
  render() {
    let stocks=[...this.state.stocks]
    if(this.state.kind){
     stocks= stocks.filter(stock=>{return stock.type===this.state.kind});
    }
  
    if(this.state.Alphabetically){
      stocks=stocks.sort((a, b) => a.name < b.name ? -1 : 1);
    }
    
    if(this.state.Price){
     stocks= stocks.sort((a, b) => a.price - b.price );
    }
    return (
      <div>
        <SearchBar  state={this.state}handleChange={this.handleChange}/>

          <div className="row">
            <div className="col-8">
            
              <StockContainer stocks={stocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

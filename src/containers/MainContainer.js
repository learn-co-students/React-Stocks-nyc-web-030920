import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state= {
    stocks:[],
    sort:'',
    filter:'Tech'
    

  }
  
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then((resp)=>resp.json())
    .then((data)=>{
      const {stocks}=this.state
      this.setState({  stocks:data})
    })
  }

  handleChange=(event)=>{
    const{name, value, type, checked}= event.target
    // type==='radio'? this.setState({[name]:checked}):this.setState({[name]:value})
    this.setState({[name]:value})
  }

  render() {
 let allStocks=[...this.state.stocks]
 if(this.state.sort==='Alphabetically'){
  allStocks=this.state.stocks.sort((a,b)=>a.name.localeCompare(b.name))
 }else if (this.state.sort==='Price'){
   allStocks = this.state.stocks.sort((a,b)=>(a.price-b.price))
 }else if(this.state.filter){
   allStocks= this.state.stocks.filter((stock)=>{
     if(stock.type === this.state.filter){
       return stock
     }
   })
 }
 console.log(allStocks)
    return (
     
      <div>
        <SearchBar  {...this.state} handleChange={this.handleChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={allStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

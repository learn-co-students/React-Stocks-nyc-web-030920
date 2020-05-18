import React from 'react'

const Stock = (props) => (
  <div onClick= {props.name === "stock"? () => props.buyStock(props.stock): () =>props.sellStock(props.stock) } className ="card" name={props.name}>
    {/* {console.log(props)} */}
      <div  className = "card-body">
        <h5 className = "card-title"> {props.stock.name} </h5> 
        <p className = "card-text"> {`${props.stock.ticker}: ${props.stock.price}`}</p>
      </div>
    </div>);

export default Stock
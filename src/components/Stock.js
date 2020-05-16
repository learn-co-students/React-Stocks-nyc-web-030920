import React from 'react'

const Stock = (props) => (
  //console.log('inside stock, propp: ', props)
  <div>
    <div className="card" onClick={() =>  props.buyStock ? props.buyStock(props.currStock): props.sellStock(props.currStock.id)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.currStock.name
          }</h5>
        <p className="card-text">{props.currStock.ticker}: {props.currStock.price}</p>
      </div>
    </div>
  </div>
);

export default Stock

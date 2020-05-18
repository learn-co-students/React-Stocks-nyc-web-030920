import React from 'react'

const Stock = (props) =>{

  console.log(props.stock.type==="Tech")


  return(
    <div onClick={() => props.addPortfolio ? props.addPortfolio(props.stock) : props.removeStock(props.stock)}>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
             props.stock.name

            }</h5>
          <p className="card-text">
             { props.stock.ticker}:{props.stock.price}

            </p>
        </div>
      </div>


    </div>
  );
}
export default Stock
